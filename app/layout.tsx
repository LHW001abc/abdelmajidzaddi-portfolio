import type { Metadata } from "next";
import { Belanosima } from "next/font/google";
import "./globals.css";
import "locomotive-scroll/src/locomotive-scroll.scss";

import { LoaderProvider } from "./context/LoaderProvider";
import { SmoothScrollProvider } from "./context/ScrollProviderContext";
import NavBar from "./components/NavBar";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));
const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["400", "700", "700"],
  variable: "--font-belanosima",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelmajidzaddi.me"),
  title: "Abdelmajid ZADDI | AI & ML Engineer",
  icons: { icon: "/me.jpg" },
  openGraph: {
    type: "website",
    title: "Abdelmajid ZADDI | AI & ML Engineer",
    description: "AI & Machine Learning Engineer specializing in Deep Learning, NLP, Computer Vision, and MLOps.",
    images: [
      {
        url: "/me.jpg",
        alt: "Abdelmajid ZADDI Portfolio",
      },
    ],
    url: "https://abdelmajidzaddi.me/",
  },
  description:
    "AI & Machine Learning Engineer specializing in Deep Learning, NLP, Computer Vision, PyTorch, TensorFlow, and cloud platforms. Proven track record of building production-ready ML solutions. Passionate about leveraging AI to solve complex real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belanosima.className} dark antialiased`}>
        <CustomCursor />
          <>
            <PageTransition />
            <SmoothScrollProvider>
              <NavBar />
              <main className="main-container">
                {children}
                <Contact />
                <Footer />
              </main>
            </SmoothScrollProvider>
          </>
       
      </body>
    </html>
  );
}
