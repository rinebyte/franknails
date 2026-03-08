import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Viewport (exported separately per Next.js guidelines) ───
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// ─── Metadata: Enterprise-grade SEO ───
export const metadata: Metadata = {
  // === Core ===
  title: {
    default: "RAJAKETE » Situs IDN Slot Gacor Minimal Deposit 1000 Via Scan QRIS 1 Detik",
    template: "%s | RAJAKETE",
  },
  description:
    "RAJAKETE merupakan situs IDN slot yang menyediakan game slot gampang menang dengan minimal deposit 1000 rupiah via scan qris langsung proses 1 detik tanpa potongan hari ini. Daftar sekarang dan rasakan sensasi bermain idn slot resmi.",
  keywords: [
    "rajakete",
    "idn slot",
    "idnslot",
    "slot deposit 1000",
    "slot gacor",
    "slot qris",
    "slot deposit rendah",
    "situs slot terpercaya",
    "idn slot gacor",
    "slot minimal deposit 1000",
    "slot online gampang menang",
    "slot deposit 1k tanpa potongan",
    "raja kete",
    "slot scan qris 1 detik",
    "daftar slot deposit murah 2025",
    "slot gacor hari ini",
    "slot deposit 1000 via qris",
    "situs idn slot resmi",
    "slot gampang jp",
    "deposit 1000 tanpa potongan",
  ],
  applicationName: "RAJAKETE",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "RAJAKETE", url: "https://franknails.com" }],
  creator: "RAJAKETE",
  publisher: "RAJAKETE",
  category: "Games & Entertainment",

  // === Metadata Base ===
  metadataBase: new URL("https://franknails.com"),

  // === Canonical & Alternates ===
  alternates: {
    canonical: "https://franknails.com/products/mood",
    languages: {
      "id-ID": "https://franknails.com/products/mood",
      "x-default": "https://franknails.com/products/mood",
    },
  },

  // === Open Graph (Facebook, LinkedIn, Pinterest) ===
  openGraph: {
    title: "RAJAKETE » Situs IDN Slot Gacor Deposit 1000 Via QRIS 1 Detik",
    description:
      "RAJAKETE situs IDN slot gampang menang dengan minimal deposit 1000 rupiah via scan QRIS 1 detik tanpa potongan. Daftar sekarang dan mainkan 500+ game slot gacor.",
    url: "https://franknails.com/products/mood",
    siteName: "RAJAKETE",
    images: [
      {
        url: "https://franknails.com/products/mood/BottleComp_SunnyAF.webp",
        width: 1200,
        height: 1200,
        alt: "RAJAKETE - Situs IDN Slot Gacor Deposit 1000",
        type: "image/webp",
      },
      {
        url: "https://franknails.com/products/mood/SunnyAF1.jpg",
        width: 1200,
        height: 1200,
        alt: "RAJAKETE IDN Slot Deposit 1000 Via QRIS",
        type: "image/jpeg",
      },
    ],
    locale: "id_ID",
    type: "website",
    countryName: "Indonesia",
  },

  // === Twitter / X ===
  twitter: {
    card: "summary_large_image",
    site: "@rajakete",
    creator: "@rajakete",
    title: "RAJAKETE » Situs IDN Slot Gacor Deposit 1000 Via QRIS",
    description:
      "Situs IDN slot gampang menang deposit 1000 via scan QRIS 1 detik tanpa potongan. 500+ game slot gacor. Daftar sekarang!",
    images: {
      url: "https://franknails.com/products/mood/BottleComp_SunnyAF.webp",
      alt: "RAJAKETE - IDN Slot Deposit 1000 Terpercaya",
    },
  },

  // === Robots / Crawlers ===
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // === Icons & App Manifest ===
  icons: {
    icon: [
      { url: "/products/mood/Frank_Favicon_32x32.png", sizes: "any" },
      { url: "/products/mood/Frank_Favicon_32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/products/mood/site.webmanifest",

  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
    other: {
      "facebook-domain-verification": ["YOUR_FACEBOOK_DOMAIN_VERIFICATION"],
      "p:domain_verify": ["YOUR_PINTEREST_VERIFICATION"],
    },
  },

  // === App Links (deep linking for mobile) ===
  appLinks: {
    web: {
      url: "https://franknails.com/products/mood",
      should_fallback: true,
    },
  },

  // === Other Meta ===
  other: {
    "msapplication-TileColor": "#000000",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RAJAKETE",
    "geo.region": "ID",
    "geo.placename": "Indonesia",
    "content-language": "id",
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────
// Product Schema (Google Rich Results for Products)
const productJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://franknails.com/products/mood",
      name: "RAJAKETE » Situs IDN Slot Gacor Minimal Deposit 1000 Via Scan QRIS 1 Detik",
      image: [
        "/products/mood/rajakete-logo.png",
        "/products/mood/SunnyAF1.jpg",
      ],
      description:
        "RAJAKETE merupakan situs IDN slot yang menyediakan game slot gampang menang dengan minimal deposit 1000 rupiah via scan qris langsung proses 1 detik tanpa potongan hari ini.",
      url: "https://franknails.com/products/mood",
      brand: {
        "@type": "Brand",
        name: "RAJAKETE",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "10000",
        availability: "https://schema.org/InStock",
        url: "https://franknails.com/products/mood",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "8",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
          datePublished: "2025-04-23",
          reviewBody:
            "RAJAKETE benar-benar menjadi pelopor situs slot deposit 1000 terpercaya! permainan idn slot sangat lengkap disini.",
          author: {
            "@type": "Person",
            name: "Uyakuya",
          },
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
          datePublished: "2025-04-16",
          reviewBody:
            "Saya sudah mencoba slot di rajakete, terbukti rajakete menghadirkan pengalaman bermain idn slot yang mutakhir dengan pembaruan berkala serta maintenance di setiap hari kamis.",
          author: {
            "@type": "Person",
            name: "Sahroni",
          },
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
          datePublished: "2026-03-08",
          reviewBody:
            "Untuk penggemar slot online, bermain di rajakete adalah pilihan terbaik dengan minimal deposit rendah kamu bisa merasakan semua permainan seru tersebut.",
          author: {
            "@type": "Person",
            name: "Bowo",
          },
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
          datePublished: "2026-03-08",
          reviewBody:
            "Slot deposit 1000 di rajakete memiliki beberapa opsi deposit yang mampu mempermudah para pemain dengan pengalaman bermain yang hebat",
          author: {
            "@type": "Person",
            name: "Joko",
          },
        },
      ],
    },
  ],
};

// Organization Schema
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "To Be Frank",
  url: "https://franknails.com",
  logo: "https://franknails.com/logo.png",
  description:
    "Premium, 10-free nail polish made for everyone. Vegan, cruelty-free, and proudly made in the USA.",
  foundingDate: "2020",
  sameAs: [
    "https://www.instagram.com/tobefranknails",
    "https://www.tiktok.com/@tobefranknails",
    "https://twitter.com/tobefranknails",
    "https://www.pinterest.com/tobefranknails",
    "https://www.facebook.com/tobefranknails",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@franknails.com",
    availableLanguage: ["English"],
  },
};

// WebSite Schema (enables Google Sitelinks Search Box)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "To Be Frank",
  url: "https://franknails.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://franknails.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// BreadcrumbList Schema
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://franknails.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IDN SLOT",
      item: "https://franknails.com/collections/nail-polish",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "RAJAKETE",
      item: "https://franknails.com/products/mood",
    },
  ],
};

// FAQPage Schema (enables Google FAQ Rich Results)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu RAJAKETE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAJAKETE adalah situs IDN Slot resmi yang menawarkan pengalaman bermain slot gacor dengan minimal deposit termurah, yakni hanya 1000 rupiah melalui metode Scan QRIS tercepat.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa minimal deposit di RAJAKETE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimal deposit di RAJAKETE sangat terjangkau, yaitu hanya 1000 rupiah. Ini memungkinkan pemain menikmati permainan IDN Slot tanpa harus mengeluarkan modal besar.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara deposit via QRIS di RAJAKETE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anda cukup memilih metode deposit QRIS, scan kode yang muncul, dan saldo akan otomatis masuk ke akun Anda dalam waktu hanya 1 detik tanpa potongan.",
      },
    },
    {
      "@type": "Question",
      name: "Apa keunggulan utama bergabung dengan RAJAKETE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keunggulan utamanya adalah proses transaksi super cepat via QRIS (1 detik), minimal deposit rendah 1000 perak, keamanan data terjamin, dan tanpa janji palsu dalam memberikan kenyamanan bermain.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bermain di RAJAKETE gampang menang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, RAJAKETE menyediakan berbagai pilihan game IDN Slot gacor yang dikenal mudah menang (gampang JP) dengan sistem yang adil, aman, dan transparan.",
      },
    },
  ],
};

// ─── Root Layout Component ───────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="product-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />

        {/* AMP HTML */}
        <link rel="amphtml" href="https://franknails.pages.dev" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
