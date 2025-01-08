import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "ai-appointment-agent",
      title: "AI Appointment Voice Agent",
      shortDesc: "Streamline appointment scheduling with AI voice assistance",
      longDesc: "Transform your appointment booking process with our intelligent voice agent. Handle scheduling, rescheduling, and cancellations effortlessly while providing a natural conversational experience.",
      image: "/placeholder.svg"
    },
    {
      id: "ai-receptionist",
      title: "AI Receptionist",
      shortDesc: "24/7 intelligent front desk solution",
      longDesc: "Provide round-the-clock reception services with our AI receptionist. Handle visitor management, inquiries, and basic administrative tasks with professional efficiency.",
      image: "/lovable-uploads/62dd238e-2306-4508-9517-70a16c0d22eb.png"
    },
    {
      id: "intelligent-customer-service",
      title: "Intelligent Customer Service Agent",
      shortDesc: "Advanced AI-powered customer support",
      longDesc: "Deliver exceptional customer service with our AI agents that understand context, handle complex queries, and provide personalized assistance across multiple channels.",
      image: "/placeholder.svg"
    },
    {
      id: "ai-sales-agent",
      title: "AI Customer Acquisition/Lead Conversion Agent",
      shortDesc: "Convert leads with AI precision",
      longDesc: "Boost your sales performance with AI agents that qualify leads, nurture prospects, and drive conversions through intelligent conversations and personalized engagement.",
      image: "/placeholder.svg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-200">
            Advanced AI voice solutions for your business
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(`service-${service.id}`)}
                className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            id={`service-${service.id}`}
            className="group mb-32 last:mb-0 scroll-mt-24"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="w-full lg:w-1/2 transform transition-transform duration-500 group-hover:scale-105">
                <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 ${
                      service.id === 'ai-receptionist' 
                        ? 'object-[50%_35%] sm:object-[50%_40%]' 
                        : 'object-center'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 transform transition-all duration-500 group-hover:translate-x-4 bg-[#1A1F2C] backdrop-blur-lg p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xl text-white">{service.shortDesc}</p>
                <p className="text-gray-200">{service.longDesc}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
                >
                  Learn more 
                  <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;