# SpaApp — A Premium Spa Website Concept

SpaApp is a responsive, public-facing spa website concept built with React, TypeScript, and Vite. The experience uses warm ivory, charcoal, and copper tones, editorial imagery, treatment discovery, and a booking-request form.

> **Demo notice:** Service names, imagery, and INR prices are illustrative. The booking form validates fields in the browser only; it does not submit, persist, or confirm a real reservation. Connect a trusted booking backend before using this for a real business.

## Features

- Responsive landing page and mobile navigation
- Treatment cards with category filters
- Service selection that carries into the booking request form
- Browser-side required-field, email, and date validation
- Accessible labels, focus states, and reduced-motion support
- SEO title, description, theme color, and social preview metadata
- Developer credit and source repository links

## Tech stack

- React 19 + TypeScript
- Vite 6
- Lucide React
- Custom CSS with responsive breakpoints

## Getting started

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run build
npm test
```

The test command currently runs the repository's existing Vitest suite. Add tests for booking validation and filtering as the project evolves.

## Before production

1. Replace demo services, pricing, imagery, and copy with verified business information.
2. Connect booking requests to a backend or booking provider and add server-side validation.
3. Add privacy policy, terms, cancellation/refund policies, and real contact details.
4. Verify image licensing, optimize/localize images, and configure analytics only with appropriate consent.
5. Configure deployment and run build, tests, keyboard checks, and mobile QA.

## Credits

Designed and developed by [Ashutosh Palhare](https://ashutoshpalhare.github.io/).

- [GitHub profile](https://github.com/ashutoshpalhare/)
- [SpaApp repository](https://github.com/ashutoshpalhare/SpaApp)
