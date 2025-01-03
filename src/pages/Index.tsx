import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Services />
        <TestimonialsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Index;