import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Services />
      </div>
    </div>
  );
};

export default Index;