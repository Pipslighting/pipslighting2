/**
 * Helpers for generating SEO metadata.
 *
 * Centralising SEO logic makes it easy to update page titles and
 * descriptions throughout the site. Each page can import these
 * definitions and extend them as needed.
 */
export const SITE_NAME = "Pip’s Christmas Lights"
export const SITE_URL = "https://pipslighting.com"
export const DEFAULT_TITLE = `${SITE_NAME} | Premium Holiday Lighting`
export const DEFAULT_DESCRIPTION =
  'Premium custom‑cut holiday lighting for homes and businesses across Northwest Arkansas. Sales, installation, takedown and storage by Pip’s Christmas Lights.'

export function getOpenGraphConfig({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = SITE_URL,
  image = "/og-image.png",
}: {
  title?: string
  description?: string
  url?: string
  image?: string
}) {
  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
}