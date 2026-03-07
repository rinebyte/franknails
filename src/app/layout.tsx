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

// ─── Metadata: Enterprise-grade SEO (Lazada / Etsy level) ───
export const metadata: Metadata = {
  // === Core ===
  title: {
    default: "Sunny AF Yellow Nail Polish | To Be Frank - Vegan & 10-Free",
    template: "%s | To Be Frank",
  },
  description:
    "Shop Sunny AF, a streak-free bold yellow nail polish by To Be Frank. Vegan, cruelty-free, 10-free formula with high-gloss finish. 2-coat full coverage. Free shipping on orders $35+.",
  keywords: [
    "yellow nail polish",
    "vegan nail polish",
    "cruelty free nail polish",
    "10-free nail polish",
    "summer nails",
    "bright nail polish",
    "non toxic nail polish",
    "To Be Frank",
    "Sunny AF",
    "leaping bunny certified",
    "streak-free nail polish",
    "high gloss nail lacquer",
    "nail polish made in USA",
    "clean beauty nail polish",
    "best yellow nail polish 2026",
  ],
  applicationName: "To Be Frank",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "To Be Frank", url: "https://franknails.com" }],
  creator: "To Be Frank",
  publisher: "To Be Frank",
  category: "Beauty & Personal Care",

  // === Metadata Base ===
  metadataBase: new URL("https://franknails.com"),

  // === Canonical & Alternates ===
  alternates: {
    canonical: "https://franknails.com/products/mood",
    languages: {
      "en-US": "https://franknails.com/products/mood",
      "x-default": "https://franknails.com/products/mood",
    },
  },

  // === Open Graph (Facebook, LinkedIn, Pinterest) ===
  openGraph: {
    title: "Sunny AF Yellow Nail Polish - Vegan & 10-Free | To Be Frank",
    description:
      "Bold, bright yellow nail polish with streak-free coverage in just 2 coats. Vegan, cruelty-free, and 10-free formula. Made in the USA.",
    url: "https://franknails.com/products/mood",
    siteName: "To Be Frank",
    images: [
      {
        url: "https://franknails.com/product/mood/BottleComp_SunnyAF.webp",
        width: 1200,
        height: 1200,
        alt: "Sunny AF - Bold Yellow Nail Polish by To Be Frank",
        type: "image/webp",
      },
      {
        url: "https://franknails.com/product/mood/SunnyAF1.jpg",
        width: 1200,
        height: 1200,
        alt: "Sunny AF Yellow Nail Polish applied on nails",
        type: "image/jpeg",
      },
      {
        url: "https://franknails.com/product/mood/SunnyAF2.jpg",
        width: 1200,
        height: 1200,
        alt: "Sunny AF Nail Polish close-up finish",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },

  // === Twitter / X ===
  twitter: {
    card: "summary_large_image",
    site: "@tobefranknails",
    creator: "@tobefranknails",
    title: "Sunny AF Yellow Nail Polish | To Be Frank",
    description:
      "Bold, streak-free yellow nail polish. Vegan, cruelty-free, 10-free. Full coverage in 2 coats. Shop now.",
    images: {
      url: "https://franknails.com/product/mood/BottleComp_SunnyAF.webp",
      alt: "Sunny AF - Bold Yellow Nail Polish by To Be Frank",
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
      { url: "/product/mood/Frank_Favicon_32x32.png", sizes: "any" },
      { url: "/product/mood/Frank_Favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/product/mood/Frank_Favicon_32x32.png", sizes: "32x32", type: "image/png" },
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
  manifest: "/product/mood/site.webmanifest",

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
    "apple-mobile-web-app-title": "To Be Frank",
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────
// Product Schema (Google Rich Results for Products)
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sunny AF - Yellow Nail Polish",
  image: [
    "https://franknails.com/product/mood/BottleComp_SunnyAF.webp",
    "https://franknails.com/product/mood/SunnyAF1.jpg",
    "https://franknails.com/product/mood/SunnyAF2.jpg",
    "https://franknails.com/product/mood/SunnyAF3.jpg",
  ],
  description:
    "Bold, bright yellow nail polish with streak-free coverage in just 2 coats. Vegan, cruelty-free, and 10-free formula. Made in the USA by To Be Frank.",
  sku: "TBF-SUNNY-AF",
  gtin13: "0000000000000",
  mpn: "TBF-SUNNY-AF-001",
  brand: {
    "@type": "Brand",
    name: "To Be Frank",
    logo: "https://franknails.com/logo.png",
  },
  color: "Yellow",
  material: "10-Free Vegan Formula",
  category: "Beauty > Nail Care > Nail Polish",
  offers: {
    "@type": "Offer",
    url: "https://franknails.com/products/mood",
    priceCurrency: "USD",
    price: "12.00",
    priceValidUntil: "2026-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "To Be Frank",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "USD",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "US",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 2,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 3,
          maxValue: 7,
          unitCode: "DAY",
        },
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "US",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 30,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Sarah M." },
      datePublished: "2026-02-21",
      reviewBody:
        "I've been looking for the perfect bright yellow that isn't streaky. This is IT. Only needed two coats for full coverage and the brush makes it so easy to apply.",
      name: "Literal sunshine in a bottle!",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Jessica T." },
      datePublished: "2026-02-07",
      reviewBody:
        "Wore this on my vacation to Hawaii and it didn't chip once after 8 days of swimming. The color is so vibrant and summery. Will definitely buy more colors from this brand!",
      name: "So shiny and lasts forever",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Emily R." },
      datePublished: "2026-01-07",
      reviewBody:
        "Yellows are notoriously hard to formulate. This one goes on smooth and self-levels brilliantly. Impressive for a 10-free polish!",
      name: "Beautiful Pigmentation",
    },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Formula Type",
      value: "10-Free",
    },
    {
      "@type": "PropertyValue",
      name: "Cruelty-Free",
      value: "Leaping Bunny Certified",
    },
    {
      "@type": "PropertyValue",
      name: "Finish",
      value: "High Gloss",
    },
    {
      "@type": "PropertyValue",
      name: "Coats for Full Coverage",
      value: "2",
    },
    {
      "@type": "PropertyValue",
      name: "Country of Origin",
      value: "United States",
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
      name: "Nail Polish",
      item: "https://franknails.com/collections/nail-polish",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sunny AF",
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
      name: "How long does the nail polish last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our formula is designed to last up to 7-10 days with a proper base and top coat application.",
      },
    },
    {
      "@type": "Question",
      name: "Is this polish safe for pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our 10-free formula means it's free of the most common toxic chemicals, making it safe for you and your little one.",
      },
    },
    {
      "@type": "Question",
      name: "How many coats do I need for full opacity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunny AF provides great coverage. We recommend 2 thin coats for the perfect, opaque high-gloss finish.",
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
        <link rel="amphtml" href="#" />

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
