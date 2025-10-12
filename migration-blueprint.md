# Migration Blueprint: Dash Fixes Website (v2)

This document outlines the plan for migrating the current static HTML landing page to a modern, full-featured Next.js application.

## 1. Core Technologies

-   **Framework:** Next.js (for React-based, server-rendered application)
-   **Styling:** Tailwind CSS (for a utility-first, highly customizable design)
-   **Deployment:** Vercel (or similar modern hosting platform)

## 2. Design Philosophy

Our goal is a clean, modern, and trustworthy design that makes it incredibly easy for a stressed-out student with a broken device to get help. We will use the **Solarized color palette** as our foundation, applied in a professional and tech-savvy manner. The site will incorporate subtle, polished animations to feel dynamic and engaging without being distracting.

## 3. Progress & Completed Steps

-   **[DONE] Foundational Setup:**
    -   Initialized Next.js project (`nextjs-test1`).
    -   Configured `tailwind.config.ts` with Solarized palette and custom fonts.
    -   Updated `layout.tsx` with global styles, fonts, and metadata.
    -   Cleared boilerplate from the main page.
-   **[DONE] Header Component:**
    -   Created `Header.tsx` component with navigation and theme toggle placeholders.
    -   Integrated the Header into the main `layout.tsx`.
-   **[DONE] Hero Section Component:**
    -   Created `Hero.tsx` component with headline, sub-headline, and calls-to-action.
    -   Added the Hero component to the main page.
-   **[DONE] "Why Dash Fixes?" Trust Bar:**
    -   Created `TrustBar.tsx` component with key value propositions.
    -   Added the TrustBar to the main page.
-   **[DONE] Our Services Section:**
    -   Created `Services.tsx` component with a grid of service cards.
    -   Added the Services section to the main page.
-   **[DONE] Our Simple 4-Step Process Section:**
    -   Created `Process.tsx` component with a timeline layout.
    -   Added the Process section to the main page.
-   **[DONE] Mail-In Repair & Donations Section:**
    -   Created `MailAndDonations.tsx` component.
    -   Added the section to the main page.
-   **[DONE] Testimonials Section:**
    -   Created `Testimonials.tsx` component with star ratings and Yelp link.
    -   Added the Testimonials section to the main page.
-   **[DONE] FAQ Section:**
    -   Created `Faq.tsx` component with an interactive accordion.
    -   Added the FAQ section to the main page.
-   **[DONE] Contact & Quote Form:**
    -   Created `ContactForm.tsx` component with Formspree integration.
    -   Added the Contact Form section to the main page.

## 5. Polishing Phase

-   **[DONE] Footer Component:**
    -   Created `Footer.tsx` component with social media links.
    -   Added the Footer to the main `layout.tsx`.
-   **[DONE] Icon Replacement:**
    -   Installed `react-icons` library.
    -   Replaced all placeholder icons in every component with professional icons from Font Awesome.
-   **[DONE] Theme Switching:**
    -   Installed `next-themes` library.
    -   Implemented dark/light mode toggle in the Header.
-   **[DONE] Mail-In Repair Page:**
    -   Created dedicated page at `/mail-in-repair`.
    -   Migrated content and forms from the original HTML file.
-   **[DONE] Donation Page:**
    -   Create a dedicated page at `/donate`.
-   **[DONE] Finalize Hero Section Content:**
    -   Copied `hero-image.webp` to the `public` directory.
    -   Implemented the Next.js `<Image>` component.
    -   Restored missing descriptive text from the original site.
-   **[DONE] Pricing Section:**
    -   Created `Pricing.tsx` component with pricing cards.
    -   Added the Pricing section to the main page.
-   **[DONE] Disclaimer Section:**
    -   Created `Disclaimer.tsx` component with iPhone serialization notice.
    -   Added the Disclaimer section to the main page.
-   **[DONE] Part Quality Section:**
    -   Created `Quality.tsx` component explaining screen quality tiers.
    -   Added the Quality section to the main page.

## 4. Proposed Website Structure (Initial Build)

1.  **Hero Section:**
    *   **Headline:** A powerful, reassuring headline.
    *   **Dynamic Sub-headline:** A "typing effect" to cycle through key services: "Fixing iPhones, MacBooks, Game Consoles, and more."
    *   **Primary Call-to-Action:** A prominent "Get a Free Quote" button that smoothly scrolls to the contact form.

2.  **"Why Dash Fixes?" Trust Bar:**
    *   A compact section below the hero with three key value propositions, each with an icon:
        *   Fast & Convenient
        *   Affordable Prices
        *   Expert Quality

3.  **Our Services Section:**
    *   Interactive cards for each main category: Phones, Laptops, Game Consoles, and a "Something Else?" card for custom inquiries.
    *   Subtle hover effects to reveal more details or add a visual glow.

4.  **Our Simple 4-Step Process Section:**
    *   A clear, visual timeline illustrating the repair process:
        *   Step 1: Get a Quote
        *   Step 2: Drop Off or Mail It In
        *   Step 3: We Repair
        *   Step 4: Device Returned!

5.  **Mail-In Repair & Donations Section:**
    *   A dedicated, clean section explaining the mail-in process and the donation program, with clear calls-to-action for each.

6.  **Testimonials Section:**
    *   A scrolling or grid-based display of customer reviews to build social proof and trust.

7.  **FAQ Section:**
    *   An accordion-style FAQ to cleanly answer common questions about part quality, repair times, and Apple's serialization messages.

8.  **Contact & Quote Form:**
    *   A simple, user-friendly form that serves as the central point for all service inquiries.

## 4. Future Features (Post-Launch Roadmap)

This initial build will serve as a strong foundation. The following features are planned for future development phases to expand the site's functionality:

-   **Inventory & Pricing Integration:**
    *   Connect the website to the master parts inventory database.
    *   Create a dynamic pricing engine that can provide more accurate, real-time quotes based on the selected device, repair type, and current part cost.

-   **Appointment Booking System:**
    *   Implement a calendar-based system for users to schedule local drop-off appointments directly on the website.

-   **Mail-In Repair Tracking Portal:**
    *   Develop a customer portal where users can enter an order or tracking number to see the live status of their mail-in repair (e.g., "Device Received," "Under Diagnosis," "Repair in Progress," "Shipped").

-   **E-commerce for DIY Parts:**
    *   Build a small, integrated online store to sell common repair parts (screens, batteries, tools) to customers who prefer to perform their own repairs.

-   **Content Hub / Blog:**
    *   Add a blog or articles section to publish content related to common tech problems, repair guides, and industry news. This will be a key driver for SEO and establishing expertise.
