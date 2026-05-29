import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import LeafCanvas from "@/components/LeafCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "queenTea — Premium Whole-Leaf Organic Teas | Artisan Tea Subscription",
  description: "Discover premium whole-leaf organic teas handpicked from historic estate gardens. Micro-batch fire-roasted, pure grade tea with zero artificial oils. Order your artisan tea collection today.",
  keywords: "premium organic teas, whole leaf tea, artisan tea, tea subscription, heritage estate tea, high altitude tea, organic tea online, premium beverage, tea e-commerce, micro batch tea",
  authors: [{ name: "Rehan Raza", url: "https://rehanraza.com" }],
  creator: "Rehan Raza",
  publisher: "queenTea",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://queentea.com",
    siteName: "queenTea",
    title: "queenTea — Premium Whole-Leaf Organic Teas",
    description: "Artisan tea collection from historical estate gardens worldwide. Experience pure, authentic tea leaves with smooth animations and seamless shopping.",
    images: [
      {
        url: "https://queentea.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "queenTea Premium Organic Teas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "queenTea — Premium Whole-Leaf Organic Teas",
    description: "Discover premium organic teas from heritage estate gardens.",
    images: ["https://queentea.com/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "Food & Beverage",
  classification: "E-Commerce, Tea Shop",
  referrer: "strict-origin-when-cross-origin",
  
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  metadataBase: new URL("https://queentea.com"),
  
  alternates: {
    canonical: "https://queentea.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/* FontAwesome for Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Developer & Attribution */}
        <meta name="author" content="Rehan Raza" />
        <meta name="developer" content="Rehan Raza" />
        
        {/* Analytics & Verification (placeholders) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
      </head>
      <body className="bg-warmcream text-stone-800 font-sans overflow-x-hidden">
        <CartProvider>
          <LeafCanvas />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
