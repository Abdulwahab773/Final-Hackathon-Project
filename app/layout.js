import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "MediCare AI - Next-Gen Clinic Management",
  description: "Experience seamless healthcare with our premium clinic management system. Consult top doctors or use our AI health checker for instant symptom analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
