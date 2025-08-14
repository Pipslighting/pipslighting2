import { NextResponse } from 'next/server'
/**
 * Contact form API endpoint.
 *
 * This route handles POST requests from the contact form. It forwards
 * submissions to both Resend (email) and a Google Sheet via webhook.
 * Configure the RESEND_API_KEY, RESEND_TO_EMAIL and SHEET_WEBHOOK_URL
 * environment variables to enable these features. The honeypot field
 * helps reduce spam submissions.
 */

export async function POST(request: Request) {
  const data = await request.json()
  const { name, phone, email, address, city, date, notes, honeypot } = data

  // basic rate limit/honeypot check
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  try {
    const tasks: Promise<any>[] = []

    // send email via Resend
    if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
      tasks.push(
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_TO_EMAIL,
            to: process.env.RESEND_TO_EMAIL,
            subject: 'New Pip’s Lighting Estimate Request',
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Address:</strong> ${address}</p><p><strong>City:</strong> ${city}</p><p><strong>Preferred Date:</strong> ${date}</p><p><strong>Notes:</strong> ${notes}</p>`,
          }),
        }),
      )
    }

    // send to Google Sheets via webhook
    if (process.env.SHEET_WEBHOOK_URL) {
      tasks.push(
        fetch(process.env.SHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
            city,
            date,
            notes,
          }),
        }),
      )
    }

    await Promise.all(tasks)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact submission failed', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}