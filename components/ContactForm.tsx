"use client"

import { useState } from 'react'

interface FormState {
  name: string
  phone: string
  email: string
  address: string
  city: string
  date: string
  notes: string
  honeypot: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    date: '',
    notes: '',
    honeypot: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({
          name: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          date: '',
          notes: '',
          honeypot: '',
        })
      } else {
        setError('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setError('An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field */}
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" autoComplete="off" />

      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium text-sm text-forest">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="font-medium text-sm text-forest">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-sm text-forest">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="address" className="font-medium text-sm text-forest">Street Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={form.address}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="font-medium text-sm text-forest">City</label>
        <input
          type="text"
          id="city"
          name="city"
          required
          value={form.city}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date" className="font-medium text-sm text-forest">Preferred Install Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="notes" className="font-medium text-sm text-forest">Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={form.notes}
          onChange={handleChange}
          className="mt-1 rounded-md border border-forest/20 p-2 text-forest focus:outline-none focus:ring-2 focus:ring-gold"
        ></textarea>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-700">Thank you! Your request has been received.</p>}
      <button
        type="submit"
        disabled={loading}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-offwhite shadow hover:bg-forest hover:text-offwhite transition-colors disabled:opacity-50"
      >
        {loading ? 'Sending…' : 'Submit Request'}
      </button>
    </form>
  )
}