import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ServiceDetailHeader from "./detail/ServiceDetailHeader";
import ServiceDetailFeatures from "./detail/ServiceDetailFeatures";
import ServiceDetailBenefits from "./detail/ServiceDetailBenefits";

const serviceDetails = {
  "ai-appointment-agent": {
    title: "AI Appointment Voice Agent",
    description: "Streamline appointment scheduling with AI voice assistance",
    longDescription: "Our AI Appointment Voice Agent revolutionizes the way businesses handle scheduling. Using advanced natural language processing and voice recognition technology, it provides a seamless experience for booking, rescheduling, and managing appointments. Available 24/7, it reduces scheduling conflicts and improves operational efficiency.",
    features: [
      "Natural voice interaction",
      "24/7 appointment scheduling",
      "Automatic conflict resolution",
      "Multi-language support",
      "Calendar integration",
      "Automated reminders"
    ],
    benefits: [
      "Reduced scheduling errors",
      "Improved customer satisfaction",
      "Increased operational efficiency",
      "Lower administrative costs"
    ]
  },
  "ai-receptionist": {
    title: "AI Receptionist",
    description: "24/7 intelligent front desk solution",
    longDescription: "Transform your front desk operations with our AI Receptionist. This intelligent solution handles visitor management, basic inquiries, and administrative tasks with professional efficiency. It provides a welcoming presence while ensuring security and streamlined operations.",
    features: [
      "Visitor check-in/out",
      "Directory assistance",
      "Package handling notifications",
      "Meeting room management",
      "Emergency protocols",
      "Multilingual support"
    ],
    benefits: [
      "24/7 front desk coverage",
      "Enhanced security",
      "Improved visitor experience",
      "Reduced operational costs"
    ]
  },
  "intelligent-customer-service": {
    title: "Intelligent Customer Service Agent",
    description: "Advanced AI-powered customer support",
    longDescription: "Our Intelligent Customer Service Agent combines advanced AI with natural language understanding to provide exceptional customer support. It handles complex queries, learns from interactions, and maintains consistent service quality across all channels.",
    features: [
      "Context-aware responses",
      "Multi-channel support",
      "Sentiment analysis",
      "Knowledge base integration",
      "Real-time translation",
      "Escalation management"
    ],
    benefits: [
      "Faster response times",
      "Consistent service quality",
      "Increased customer satisfaction",
      "Scalable support operations"
    ]
  },
  "ai-sales-agent": {
    title: "AI Customer Acquisition/Lead Conversion Agent",
    description: "Convert leads with AI precision",
    longDescription: "Maximize your sales potential with our AI Sales Agent. Using advanced algorithms and natural language processing, it qualifies leads, nurtures prospects, and drives conversions through personalized engagement strategies.",
    features: [
      "Lead qualification",
      "Personalized outreach",
      "Follow-up automation",
      "Sales pipeline integration",
      "Performance analytics",
      "A/B testing capabilities"
    ],
    benefits: [
      "Increased conversion rates",
      "Improved lead quality",
      "Consistent follow-up",
      "Data-driven insights"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { toast } = useToast();
  
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  
  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-white">Service not found</h1>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  const handleContactClick = () => {
    toast({
      title: "Contact Request Sent",
      description: `We'll get back to you shortly about our ${service.title} services.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceDetailHeader
          title={service.title}
          description={service.description}
          longDescription={service.longDescription}
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ServiceDetailFeatures features={service.features} />
          <ServiceDetailBenefits benefits={service.benefits} />
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg"
          >
            Contact Us About This Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;