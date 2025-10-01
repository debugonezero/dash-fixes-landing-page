# Next Steps for dash-fixes-app

I am having trouble accessing the `/Users/admin/dash_fixes/dash-fixes-app` directory directly. Please follow these steps to continue building the new website.

## 1. Update Tailwind Configuration

Copy the code below and paste it into `/Users/admin/dash_fixes/dash-fixes-app/tailwind.config.ts`, completely replacing the existing content.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        solarized: {
            dark: '#002b36',
            dark2: '#073642',
            dark3: '#586e75',
            light: '#fdf6e3',
            light2: '#eee8d5',
            light3: '#93a1a1',
            yellow: '#b58900',
            orange: '#cb4b16',
            red: '#dc322f',
            magenta: '#d33682',
            violet: '#6c71c4',
            blue: '#268bd2',
            cyan: '#2aa198',
            green: '#859900'
        }
      },
      fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
          heading: ['var(--font-space-grotesk)', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
```

## 2. Set Up Custom Fonts

Next.js has a built-in system for optimizing fonts. Copy the code below and paste it into `/Users/admin/dash_fixes/dash-fixes-app/app/layout.tsx`, completely replacing the existing content.

```typescript
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter' 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk' 
});

export const metadata: Metadata = {
  title: "Dash Fixes | Campus Tech Repairs",
  description: "Your trusted campus expert for fast, affordable repairs on iPhones, MacBooks, and game consoles. Serving PCC, Caltech, and Pasadena with on-campus pickup and nationwide mail-in service. Get your free quote from the Tech Alchemist today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
```

## 3. Copy Image Assets

Run the following command in your terminal to copy the `graphics` folder from your old project into the `public` directory of your new project. The `public` folder in Next.js is where all static assets like images are stored.

```

## 4. Add External Libraries (Icons & Animations)

To add the icons and animations, we need to link to their stylesheets and scripts. The best place to do this in Next.js is in the `layout.tsx` file.

Copy the code below and **replace the `RootLayout` function in `/Users/admin/dash_fixes/dash-fixes-app/app/layout.tsx`** with it. This new version includes the links for Font Awesome and AOS.

```typescript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  );
}
```

## 5. Preview Your New Website!

Once you have completed all the steps above, you can start the development server to see your new website in action.

In your terminal, navigate to the new project's directory:

```bash
cd /Users/admin/dash_fixes/dash-fixes-app
```

Then, run the development server:

```bash
npm run dev
```

Open the URL it gives you (usually `http://localhost:3000`) in your browser. You should see your new, modern, and correctly configured website.
