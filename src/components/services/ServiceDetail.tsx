import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import ServiceDetailHeader from "./detail/ServiceDetailHeader";
import ServiceDetailFeatures from "./detail/ServiceDetailFeatures";
import ServiceDetailBenefits from "./detail/ServiceDetailBenefits";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Service data mapping
  const services = {
    "ai-appointment-agent": {
      title: "AI Appointment Voice Agent",
      description: "Streamline appointment scheduling with AI voice assistance",
      longDescription: "Transform your appointment booking process with our intelligent voice agent. Handle scheduling, rescheduling, and cancellations effortlessly while providing a natural conversational experience.",
      features: [
        "Natural language processing for human-like interactions",
        "24/7 appointment scheduling availability",
        "Seamless integration with existing calendar systems",
        "Multi-language support",
        "Automated confirmation and reminder notifications"
      ],
      benefits: [
        "Reduce administrative workload",
        "Minimize scheduling errors",
        "Improve customer satisfaction",
        "Increase booking efficiency",
        "Lower operational costs"
      ]
    },
    "ai-receptionist": {
      title: "AI Receptionist",
      description: "24/7 intelligent front desk solution",
      longDescription: "Provide round-the-clock reception services with our AI receptionist. Handle visitor management, inquiries, and basic administrative tasks with professional efficiency.",
      features: [
        "Visitor check-in and management",
        "Real-time language translation",
        "Smart routing of inquiries",
        "Document processing capabilities",
        "Integration with security systems"
      ],
      benefits: [
        "Enhanced security and visitor tracking",
        "Improved first impression",
        "Reduced wait times",
        "Consistent service quality",
        "Cost-effective staffing solution"
      ]
    },
    "intelligent-customer-service": {
      title: "Intelligent Customer Service Agent",
      description: "Advanced AI-powered customer support",
      longDescription: "Deliver exceptional customer service with our AI agents that understand context, handle complex queries, and provide personalized assistance across multiple channels.",
      features: [
        "Context-aware responses",
        "Multi-channel support integration",
        "Sentiment analysis",
        "Automated ticket management",
        "Knowledge base integration"
      ],
      benefits: [
        "Faster response times",
        "Improved customer satisfaction",
        "Reduced support costs",
        "24/7 availability",
        "Scalable support operations"
      ]
    },
    "ai-sales-agent": {
      title: "AI Customer Acquisition/Lead Conversion Agent",
      description: "Convert leads with AI precision",
      longDescription: "Boost your sales performance with AI agents that qualify leads, nurture prospects, and drive conversions through intelligent conversations and personalized engagement.",
      features: [
        "Lead qualification automation",
        "Personalized engagement scripts",
        "Sales pipeline integration",
        "Performance analytics",
        "Multi-channel outreach capabilities"
      ],
      benefits: [
        "Increased conversion rates",
        "Improved lead quality",
        "Reduced sales cycle time",
        "Consistent follow-up",
        "Data-driven insights"
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 -z-10" />
      <div className="absolute inset-0 opacity-30 -z-10 bg-[linear-gradient(to_right,#221F26,#ea384c,#F97316),linear-gradient(to_top,#0EA5E9,#6B46C1,transparent),linear-gradient(40deg,#0EA5E9,#ea384c,#F97316)] bg-blend-overlay" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <ServiceDetailHeader
          title={service.title}
          description={service.description}
          longDescription={service.longDescription}
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ServiceDetailFeatures features={service.features} />
          <ServiceDetailBenefits benefits={service.benefits} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;