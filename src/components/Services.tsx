import ServiceItem from "./services/ServiceItem";
import ServiceNavigation from "./services/ServiceNavigation";

const Services = () => {
  const services = [
    {
      id: "ai-appointment-agent",
      title: "AI Appointment Voice Agent",
      shortDesc: "Streamline appointment scheduling with AI voice assistance",
      longDesc: "Transform your appointment booking process with our intelligent voice agent. Handle scheduling, rescheduling, and cancellations effortlessly while providing a natural conversational experience.",
      image: "/lovable-uploads/530543e9-690f-4d5e-8dd3-c625b395a604.png"
    },
    {
      id: "ai-receptionist",
      title: "AI Receptionist",
      shortDesc: "24/7 intelligent front desk solution",
      longDesc: "Provide round-the-clock reception services with our AI receptionist. Handle visitor management, inquiries, and basic administrative tasks with professional efficiency.",
      image: "/lovable-uploads/cff2b406-c7ad-4664-b494-7cb6283529d7.png"
    },
    {
      id: "intelligent-customer-service",
      title: "Intelligent Customer Service Agent",
      shortDesc: "Advanced AI-powered customer support",
      longDesc: "Deliver exceptional customer service with our AI agents that understand context, handle complex queries, and provide personalized assistance across multiple channels.",
      image: "/lovable-uploads/641fdacf-caaf-4f59-8ff7-24f766dca13f.png"
    },
    {
      id: "ai-sales-agent",
      title: "AI Customer Acquisition Agent",
      shortDesc: "Convert leads with AI precision",
      longDesc: "Boost your sales performance with AI agents that qualify leads, nurture prospects, and drive conversions through intelligent conversations and personalized engagement.",
      image: "/lovable-uploads/365b6173-0871-435e-b189-b529ec695527.png"
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
          <ServiceNavigation 
            services={services} 
            onServiceClick={(id) => scrollToSection(`service-${id}`)} 
          />
        </div>

        {services.map((service, index) => (
          <ServiceItem 
            key={service.id} 
            service={service} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;