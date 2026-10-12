import "./globals.css";
import { siteConfig } from "../data/content";
import { PostHogProvider } from "./PostHogProvider";
import PostHogPageView from "./PostHogPageView";

export const metadata = {
  metadataBase: new URL("https://durexplaylube.com"),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.canonicalUrl,
    siteName: "Durex Play Lube বাংলাদেশ",
    images: [
      {
        url: "/images/hero-strawberry.webp",
        width: 1024,
        height: 1536,
        alt: siteConfig.hero.image.alt,
      },
      {
        url: "/images/durex-collection.webp",
        width: 1254,
        height: 1254,
        alt: siteConfig.whatIs.image.alt,
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero-strawberry.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.canonicalUrl}#website`,
        url: siteConfig.canonicalUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "bn",
      },
      {
        "@type": "Product",
        "@id": `${siteConfig.canonicalUrl}#product`,
        name: "Durex Play Lube",
        description: siteConfig.description,
        image: [
          "/images/hero-strawberry.webp",
          "/images/durex-collection.webp",
        ],
        brand: {
          "@type": "Brand",
          name: "Durex",
        },
        category: "Personal Lubricant",
        offers: {
          "@type": "Offer",
          url: siteConfig.affiliateUrl,
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Daraz Bangladesh",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.canonicalUrl}#faq`,
        mainEntity: siteConfig.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="bn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PostHogProvider>
          <PostHogPageView />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
