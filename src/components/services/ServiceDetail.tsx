import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServiceDetailHeader from "./detail/ServiceDetailHeader";
import ServiceDetailFeatures from "./detail/ServiceDetailFeatures";
import ServiceDetailBenefits from "./detail/ServiceDetailBenefits";
import ServiceImage from "./detail/ServiceImage";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  const getServiceTitle = () => {
    if (serviceId === 'intelligent-customer-service') {
      return "Win Every Customer with Outstanding Service";
    }
    return "Transform Your Customer Experience Today";
  };

  const getServiceSubtext = () => {
    if (serviceId === 'intelligent-customer-service') {
      return "Don't let your customers walk away... Empower your contact center with AI Agents that deliver lightning-fast, personalized, and unforgettable service they'll love and stay for!";
    }
    return "Elevate your customer service to new heights. Our AI-powered solutions ensure every interaction builds loyalty, delivering the seamless, responsive experience your customers expect in today's digital world.";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <ServiceDetailHeader
              title={service.title}
              description={service.description}
              longDescription={service.longDescription}
            />
            
            {service.image && (
              <ServiceImage image={service.image} title={service.title} />
            )}

            <div className="text-center mt-16 mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {getServiceTitle()}
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                {getServiceSubtext()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceDetailFeatures features={service.features} />
              <ServiceDetailBenefits benefits={service.benefits} />
            </div>

            <div className="mt-16 text-center">
              <Link to="/request-demo">
                <button className="px-8 py-3 border-2 border-[#3f80f6] text-white rounded-full hover:bg-[#3f80f6] hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-sm">
                  Request A Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;