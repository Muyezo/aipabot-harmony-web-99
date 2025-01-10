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

            <div className="grid md:grid-cols-2 gap-8 mt-12">
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