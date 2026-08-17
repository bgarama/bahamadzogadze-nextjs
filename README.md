# BAHA MADZO GADZE FOR CHARITY - Website

Modern Next.js website for BAHA MADZO GADZE FOR CHARITY, focused on environmental conservation and community development.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **CSS Modules**
- **React 19**

## Getting Started

### Install Dependencies

```bash
npm install
## Deployment and Domain Configuration

This project is deployed on **Vercel** and uses **Cloudflare** for DNS management.

### Overview
- **Hosting:** Vercel
- **DNS provider:** Cloudflare
- **Primary domain:** `bahamadzogadze.com`
- **WWW domain:** `www.bahamadzogadze.com`

### DNS Configuration
The domain is connected to Vercel through Cloudflare using the exact DNS targets provided by Vercel.

Required records:
- `@` → `CNAME` → Vercel-assigned target
- `www` → `CNAME` → Vercel-assigned target

Both records must be set to:
- **Proxy status:** `DNS only`

If Vercel provides a project-specific target, that exact value should always be used.

### DNS Management Rules
To keep the configuration stable and valid:

- remove any conflicting `A`, `AAAA`, or `CNAME` records for the same hostname before adding the Vercel record
- keep all email, verification, and authentication records that are still in use
- do not change nameservers to Vercel while DNS is managed in Cloudflare
- do not mix multiple hosting targets for the same hostname

### Migration Context
The project was previously connected to **GitHub Pages** and was later migrated to **Vercel**.

As part of the migration:
- old GitHub Pages `A` records for the apex domain were removed
- old GitHub Pages `CNAME` records for `www` were removed
- new Vercel DNS records were added for both `@` and `www`

### Validation Outcome
Domain validation in Vercel did not complete successfully until both required DNS records were configured.

A partial setup was not sufficient. The configuration became valid only after:
- the apex domain (`@`) pointed correctly to Vercel
- the `www` subdomain pointed correctly to Vercel
- conflicting legacy records were removed

### Preserved Records
The following records were intentionally kept unchanged:
- MX records
- TXT verification records
- Google Workspace and related email/authentication records

### Troubleshooting Reference
If domain validation fails in the future, verify the following:

1. both `@` and `www` are present in Cloudflare
2. both records point to the exact Vercel target shown in the Vercel dashboard
3. both records are set to `DNS only`
4. there are no conflicting `A`, `AAAA`, or `CNAME` records for the same hostname
5. the domain is added correctly in the Vercel project settings
6. enough time has passed for DNS propagation before rechecking validation

### Search Indexing Note
After migration from GitHub Pages to Vercel, search engines may temporarily continue serving older cached results.

To support reindexing:
- confirm ownership in Google Search Console
- inspect important URLs
- request reindexing where appropriate
- ensure the sitemap reflects the current deployment

### Current Production State
The live production configuration is:

- **application hosting:** Vercel
- **DNS management:** Cloudflare
- **domain routing:** Cloudflare records pointing to Vercel
- **legacy GitHub Pages DNS records:** removed
- **email and verification records:** preserved
