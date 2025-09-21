import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import PricingTable from "@/components/site/PricingTable";
import Calculator from "@/components/site/Calculator";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <PricingTable />
      <Calculator />
      <Testimonials />
      <Contact />
    </div>
  );
}
