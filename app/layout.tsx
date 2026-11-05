import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "HRG Hair Regrowth Clinic | Personalised Hair Restoration",
  description:
    "A premium demonstration website for HRG Hair Regrowth Clinic, focused on thoughtful consultation and individual treatment planning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
