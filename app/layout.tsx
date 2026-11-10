import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hair Transplant Clinic in Delhi | HRG Hair Regrowth Clinic",
  description:
    "HRG Hair Regrowth Clinic, Rohini Sector 8, Delhi – hair transplant, FUE, hairline design, PRP and hair regrowth treatments. Book your consultation on WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
