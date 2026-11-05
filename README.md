# HRG Hair Regrowth Clinic — Phase 1 demo

A responsive Next.js client demo with an HRG blue-and-silver editorial system and a validated four-field WhatsApp consultation-request flow.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER` in `.env.local` to the clinic’s international-format WhatsApp number using digits only, without `+`, spaces, or punctuation. Restart the development server after changing it. If the number is absent, the form keeps the visitor’s input and shows a clear demo-configuration message instead of redirecting.

The inquiry asks for the visitor’s name, age, city or area, and treatment interest. The website prepares a WhatsApp draft but does not store the form or send it automatically.

## Validation

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Required before launch

- Confirmed WhatsApp number, phone number, clinic address, hours, and map link
- Clinically approved service list and all treatment copy
- Named clinician profiles with verified credentials and approved portraits
- Consented, verified patient results or testimonials, if used
- Approved privacy notice, terms, and inquiry-data handling policy
- Final brand/photography approval and accessibility review on real devices

All current marketing and process copy is draft demo content. A consultation request is not presented as a confirmed appointment, and the form does not store or transmit data anywhere except the visitor-controlled WhatsApp draft.
