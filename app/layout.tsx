import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { hospital } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vinamraswarajhospital.com"),
  title: {
    default: "Vinamra Swaraj Hospital | Multi-Speciality Hospital in Vashi, Navi Mumbai",
    template: "%s | Vinamra Swaraj Hospital",
  },
  description:
    "Vinamra Swaraj Hospital is a NABH-accredited multi-speciality 30-bed hospital in Vashi, Navi Mumbai. 16+ specialities, 24/7 emergency, cashless insurance and experienced specialist doctors.",
  keywords: [
    "hospital in Vashi",
    "multi-speciality hospital Navi Mumbai",
    "NABH hospital Vashi",
    "emergency hospital Navi Mumbai",
    "Vinamra Swaraj Hospital",
  ],
  openGraph: {
    title: "Vinamra Swaraj Hospital | Vashi, Navi Mumbai",
    description:
      "NABH-accredited multi-speciality hospital in Vashi, Navi Mumbai. 24/7 emergency care, 16+ specialities, cashless insurance.",
    type: "website",
    locale: "en_IN",
    siteName: hospital.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
