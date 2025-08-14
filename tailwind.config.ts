import type { Config } from 'tailwindcss'

/**
 * Tailwind configuration for the Pip’s Christmas Lights website.
 *
 * Here we enable JIT compilation and extend the default theme to include
 * custom colours that fit the premium, old‑money aesthetic the client
 * requested. We also register content globs for our `app/` and
 * `components/` directories so that unused classes are purged in
 * production builds.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0a2d2e',
        gold: '#b49a5a',
        cranberry: '#7b2d3d',
        offwhite: '#f6f5f1',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config