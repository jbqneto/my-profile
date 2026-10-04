This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO

Production metadata uses `https://dev.jbqneto.com` as the canonical origin. Localized titles, descriptions, language alternatives and profile structured data are maintained in `src/lib/seo.ts`. `/en` and `/br` each have a self-referencing canonical; `x-default` points to `/br`, the default language. The sitemap lists the two canonical pages, and the Open Graph image route generates a localized 1200 × 630 PNG. Vercel preview and development deployments use `noindex`.

After deploying, verify domain ownership in Google Search Console, submit `https://dev.jbqneto.com/sitemap.xml`, and inspect `/en` and `/br`. Check the deployed profile markup with Google's Rich Results Test. Indexing and enhanced search results depend on the search engine; metadata does not guarantee ranking.

## Node.js runtime

Use Node.js 24 (`nvm install && nvm use`). The `engines.node` value in `package.json` pins Vercel builds and functions to `24.x`; keep the Vercel project setting aligned with the same major version. Install dependencies with `npm ci`, then run `npm run build`.
