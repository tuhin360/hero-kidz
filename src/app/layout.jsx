import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const fontBangla = localFont({
  src: "../../src/fonts/mayaboti-normal.ttf",
});

/* ---------------- SEO METADATA ---------------- */
export const metadata = {
  title: {
    default: "HeroKidz - Kids Learning & Educational Toys",
    template: "%s | HeroKidz",
  },

  description:
    "HeroKidz is a modern e-commerce platform for educational toys that help kids learn through play.",

  keywords: [
    "kids toys",
    "educational toys",
    "learning toys",
    "bangladesh toy shop",
    "HeroKidz",
  ],

  authors: [{ name: "HeroKidz Team" }],

  creator: "HeroKidz",

  metadataBase: new URL("https://hero-kidz-seven-lemon.vercel.app"),

  /* ---------------- OPEN GRAPH (SOCIAL PREVIEW) ---------------- */
  openGraph: {
    title: "HeroKidz - Educational Toys for Kids",
    description: "Discover fun learning toys for children with HeroKidz.",
    url: "https://hero-kidz-seven-lemon.vercel.app",
    siteName: "HeroKidz",

    images: [
      {
        url: "https://i.ibb.co.com/DcJwYmM/Screenshot-1.png",
        width: 1200,
        height: 630,
        alt: "HeroKidz Homepage Preview",
      },
    ],

    type: "website",
  },
  /* ---------------- TWITTER SHARE ---------------- */
  twitter: {
    card: "summary_large_image",
    title: "HeroKidz - Kids Educational Toys",
    description: "Best learning toys for kids in Bangladesh.",
    images: ["https://i.ibb.co.com/DcJwYmM/Screenshot-1.png"],
  },

  /* ---------------- ICON ---------------- */
  icons: {
    icon: "https://i.ibb.co.com/Lh6Q78hd/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
