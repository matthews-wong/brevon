# Brevon Solutions – Official Website Specification (claude.md)

## 1. Company Identity
**Company Name:** Brevon Solutions  
**Domain:** https://brevonsolutions.com  
**Country:** Indonesia  
**Business Type:** Software & IT Consulting Company  

**Tagline (EN):**
Building Scalable Digital Solutions for Modern Businesses

**Tagline (ID):**
Membangun Solusi Digital yang Skalabel untuk Bisnis Modern

---

## 2. Business Overview
Brevon Solutions is an Indonesian-based software company providing end-to-end digital solutions, including IT consulting, web application development, system integration, UI/UX design, and digital marketing services.

The company targets:
- SMEs
- Startups
- Enterprises
- Corporate & institutional clients

Primary goal of the website:
- Build credibility
- Generate leads
- Rank highly on Google (Indonesia + global)
- Clearly communicate services and expertise

---

## 3. Technology Stack (Mandatory)

### Core
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** `next-intl`
- **SEO:** Next.js Metadata API
- **Icons:** Lucide / Heroicons
- **Deployment:** Vercel-ready

### Performance
- Server Components by default
- Client Components only when necessary
- Lazy loading
- Optimized images (`next/image`)
- Lighthouse score target ≥ 90

---

## 4. Internationalization (i18n)

### Supported Languages
- `en` – English
- `id` – Bahasa Indonesia

### Routing
- `/en/...`
- `/id/...`

### Rules
- Default locale: `id`
- All pages must be translated
- No mixed-language content
- Metadata must be localized
- Language switcher visible on all pages
- Use `next-intl` with JSON message files

---

## 5. SEO & Metadata (Critical)

### Global SEO Rules
Every page MUST include:
- Localized `<title>`
- Localized `<meta description>`
- Keywords
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Robots directives
- Alternate language links (`hreflang`)


---

## 6. Structured Data (JSON-LD)

Implement structured data on all relevant pages:

### Required Schemas
- Organization
- Website
- LocalBusiness
- Service
- BreadcrumbList

### Organization Schema Fields
- name: Brevon Solutions
- url: https://brevonsolutions.com
- logo
- sameAs (social links if available)
- address: Indonesia
- contactPoint

---

## 7. Brand Voice & Tone

### Tone
- Professional
- Confident
- Clear
- Solution-oriented
- Enterprise-grade

### Avoid
- Overly casual language
- Buzzword-only content
- Generic marketing fluff

---

## 8. Services (Core Offering)

### 1. IT Consulting
**EN:**
- Digital transformation strategy
- System architecture design
- Cloud & infrastructure consulting
- Technology roadmap planning

**ID:**
- Strategi transformasi digital
- Perancangan arsitektur sistem
- Konsultasi cloud & infrastruktur
- Perencanaan roadmap teknologi

---

### 2. Web Application Development
**EN:**
- Custom web applications
- SaaS platforms
- Enterprise systems
- API & backend development

**ID:**
- Aplikasi web kustom
- Platform SaaS
- Sistem enterprise
- Pengembangan API & backend

---

### 3. Tools & System Integration
**EN:**
- Third-party API integration
- ERP / CRM integration
- Automation & workflow tools
- Data synchronization

**ID:**
- Integrasi API pihak ketiga
- Integrasi ERP / CRM
- Otomatisasi sistem
- Sinkronisasi data

---

### 4. UI / UX Design
**EN:**
- User research
- Wireframing & prototyping
- UI design systems
- UX optimization

**ID:**
- Riset pengguna
- Wireframe & prototipe
- Sistem desain UI
- Optimasi UX

---

### 5. Digital Marketing
**EN:**
- Search engine optimization (SEO)
- Performance marketing
- Analytics & tracking
- Conversion optimization

**ID:**
- Optimasi mesin pencari (SEO)
- Performance marketing
- Analitik & tracking
- Optimasi konversi

---

## 9. Pages Structure

### Mandatory Pages
- `/` – Home
- `/about`
- `/services`
- `/services/it-consulting`
- `/services/web-development`
- `/services/system-integration`
- `/services/ui-ux`
- `/services/digital-marketing`
- `/contact`
- `/privacy-policy`
- `/terms`

Each page MUST exist in:
- `/en/...`
- `/id/...`

---

## 10. Homepage Layout

### Sections
1. Hero section with strong value proposition
2. Services overview
3. Why Brevon Solutions
4. Technology stack
5. Work process
6. Trust indicators
7. Call-to-action

### CTA Examples
- “Request a Consultation”
- “Talk to Our Team”
- “Get a Free Assessment”

---

## 11. UI / UX Guidelines
- Clean, modern, corporate look
- Mobile-first design
- Consistent spacing & typography
- Clear visual hierarchy
- Strong CTA visibility
- Accessible (WCAG-friendly)

---

## 12. Performance & Best Practices
- Use `metadata.ts` per route
- Dynamic SEO per locale
- Minimize client-side JS
- No unnecessary libraries
- Proper error handling
- SEO-friendly headings (H1–H3)

---

## 13. Content Rules
- SEO-optimized but human-readable
- Clear business value
- No placeholder text
- Use active voice
- Localized phrasing for Indonesia

---

## 14. Non-Goals
- No CMS integration
- No authentication system
- No e-commerce
- No blog (can be added later)

---

## 15. Success Criteria
- Professional corporate presence
- High SEO readiness
- Clear service positioning
- Lead-generation focused
- Scalable for future growth

---

## 16. Final Instruction
Follow this document strictly.  
If any ambiguity exists, default to:
**SEO-first, performance-first, enterprise-grade implementation.**
