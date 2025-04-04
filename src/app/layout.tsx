import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "تپسی‌فود",
    template: "%s | تپسی‌فود",
  },
  appleWebApp: {
    capable: true,
    title: "تپسی‌فود",
  },
  applicationName: "تپسی‌فود",
  creator: "تپسی‌فود",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      media: "(prefers-color-scheme: light)",
      url: "/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      media: "(prefers-color-scheme: dark)",
      url: "/favicon-dark.svg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      url: "/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-icon-180x180.png",
    },
    {
      rel: "android-touch-icon",
      url: "/android-icon-512x512.png",
    },
    {
      color: "#1c1d1f",
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  ],
  robots: {
    index: false,
  },
  other: {
    google: "notranslate",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
  userScalable: false,
  viewportFit: "cover",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
