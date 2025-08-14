# Pip’s Christmas Lights Website

This repository contains the source code for **pipslighting.com**, a fast, premium holiday lighting website inspired by the structure and flow of christmasbrothers.com. The site is built with Next.js 14, TailwindCSS and TypeScript, and follows a component‑driven architecture in the `app/` directory.

## Features

- **Responsive design** with an elegant “old money” vibe using a palette of deep green, warm gold, off‑white and cranberry accents.
- **Custom pages** for services, gallery, process, service areas, about, FAQs, reviews, contact and blog.
- **Original copy and assets** — no text or images are copied from the reference site. Placeholder photos are generated for the gallery and can be replaced with your own.
- **Contact form** that submits via a serverless API route. Supports email notifications through Resend and logging submissions to a Google Sheet via webhook. Includes basic anti‑spam measures and a honeypot field.
- **SEO & accessibility** best practices: metadata, OpenGraph, Schema.org (LocalBusiness, Service, FAQ), sitemap, robots and WCAG AA colour contrast.
- **MDX‑ready** content structure (see `content/`), enabling easy editing of page sections without touching code.
- **Developer tooling**: ESLint, Prettier, Husky pre‑commit hook and TypeScript configuration.

## Getting Started

### Prerequisites

Ensure you have Node.js `>=18` installed. This project uses `pnpm` for package management; install it globally if you haven’t already:

```bash
npm install -g pnpm
```

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`. Changes to files under `app/` or `components/` will hot‑reload in your browser.

### Building for Production

To create an optimised production build:

```bash
pnpm build
pnpm start
```

### Environment Variables

Create a `.env.local` file at the root of the project to store sensitive configuration. The following variables are supported:

```bash
# Resend configuration (for form email notifications)
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=you@example.com

# Google Sheets webhook (for storing form submissions)
SHEET_WEBHOOK_URL=https://script.google.com/.../exec

# Analytics (optional)
GA_MEASUREMENT_ID=G-XXXXXXXX

# Hotjar (optional)
HOTJAR_ID=XXXXXXXX
```

If you don’t need a particular integration, you can omit its variable and the feature will be disabled automatically.

## Deployment

### Deploy to Vercel (Recommended)

1. Create a new project in [Vercel](https://vercel.com/) and connect it to this repository.
2. In the **Environment Variables** section of the Vercel dashboard, add the same variables defined in your `.env.local` file.
3. Trigger a deploy. Vercel will build and host your site automatically.
4. Once deployed, open the Vercel project’s **Settings → Domains**. Add your custom domain `pipslighting.com` and follow the verification instructions.
5. Update your domain’s DNS records at your registrar:
   - If you are using an apex domain (e.g. `pipslighting.com`), create an **A** record pointing to Vercel’s IP addresses: `76.76.21.21`.
   - For `www.pipslighting.com` or other subdomains, create a **CNAME** record pointing to your Vercel project’s `.vercel.app` subdomain.
6. Wait for DNS propagation (usually within a few minutes). Vercel will issue and auto‑renew SSL certificates for you.

### Self‑Hosting

Alternatively you can self‑host the site using Node.js or Docker. After running `pnpm build`, the `.next/` directory contains the production build. Run `pnpm start` to launch the server on port 3000. You will need to configure your own process manager and SSL termination.

## Editing Content

Many page sections are built with React components and/or MDX files under `app/` and `content/`. To update copy or images:

- **Text and headings**: open the corresponding component or page file in `app/` and edit the strings. They are clearly commented for ease of use.
- **Gallery images**: replace the files in `public/images/gallery-*.webp` with your own WebP or JPEG images. Maintain the numbering scheme (`gallery-1.webp` through `gallery-12.webp`) to avoid broken links.
- **Colours and fonts**: edit `tailwind.config.ts` to customise the theme.

## Contributing

Feel free to fork this repository and modify it for your own holiday lighting business. Pull requests are welcome if you’d like to suggest improvements or bug fixes.

## License

This project is provided as‑is for educational and illustrative purposes. You are free to use and modify the code for your own business but please do not redistribute it as a paid template.