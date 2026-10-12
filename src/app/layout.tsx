import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${wedding.groom.first} & ${wedding.bride.first} — Walimatul Urus`,
  description: `${wedding.parents.father} and ${wedding.parents.mother} invite you to the walimatul urus of ${wedding.groom.full} and ${wedding.bride.full} at Cyber Glass Hall, ${wedding.city}.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3ebe3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${script.variable} ${sans.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("ah-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.intro="skip"}}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`.intro{display:none!important}.site.waiting,.reveal{visibility:visible!important;opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a className="skip" href="#top">
          Skip to invitation
        </a>
        {children}
      </body>
    </html>
  );
}
