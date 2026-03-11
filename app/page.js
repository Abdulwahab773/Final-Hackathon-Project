import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIPromo from "@/components/AIPromo";
import HowItWorks from "@/components/HowItWorks";
import FeaturedDoctors from "@/components/FeaturedDoctors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <AIPromo />
        <HowItWorks />
        <FeaturedDoctors />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
