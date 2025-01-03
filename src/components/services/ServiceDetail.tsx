import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const serviceDetails = {
  "ai-consulting": {
    title: "AI Consulting",
    description: "Expert guidance on implementing AI solutions in your business",
    longDescription: "Our AI consulting services help businesses navigate the complex landscape of artificial intelligence. We provide strategic guidance on AI implementation, helping you identify opportunities, overcome challenges, and maximize ROI.",
    features: [
      "AI readiness assessment",
      "Implementation strategy",
      "Technology stack recommendations",
      "ROI analysis",
      "Risk assessment",
      "Change management support"
    ],
    benefits: [
      "Accelerated AI adoption",
      "Reduced implementation risks",
      "Optimized resource allocation",
      "Clear roadmap for success"
    ]
  },
  "machine-learning": {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your specific needs",
    longDescription: "We develop custom machine learning solutions that address your unique business challenges. From predictive analytics to computer vision, our expertise covers the full spectrum of ML applications.",
    features: [
      "Custom model development",
      "Data preprocessing",
      "Model training and validation",
      "Performance optimization",
      "Deployment support",
      "Monitoring and maintenance"
    ],
    benefits: [
      "Improved decision making",
      "Automated processes",
      "Enhanced efficiency",
      "Competitive advantage"
    ]
  },
  "data-analytics": {
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    longDescription: "Our data analytics services help you unlock the value hidden in your data. We combine advanced analytics techniques with business expertise to deliver meaningful insights that drive growth.",
    features: [
      "Data strategy development",
      "Advanced analytics",
      "Visualization solutions",
      "Predictive modeling",
      "Real-time analytics",
      "Custom dashboards"
    ],
    benefits: [
      "Data-driven decisions",
      "Improved operational efficiency",
      "Better customer insights",
      "Increased revenue"
    ]
  },
  "ai-training": {
    title: "AI Training",
    description: "Comprehensive training programs for your team",
    longDescription: "Empower your team with the knowledge and skills needed to leverage AI effectively. Our training programs are designed to bridge the gap between technical complexity and practical application.",
    features: [
      "Customized curriculum",
      "Hands-on workshops",
      "Real-world case studies",
      "Technical deep dives",
      "Best practices",
      "Ongoing support"
    ],
    benefits: [
      "Enhanced team capabilities",
      "Faster adoption",
      "Reduced dependency",
      "Innovation culture"
    ]
  },
  "chatbot-development": {
    title: "Chatbot Development",
    description: "Intelligent conversational agents for customer service",
    longDescription: "We create sophisticated chatbots that enhance customer engagement and streamline support operations. Our solutions combine natural language processing with business logic to deliver meaningful interactions.",
    features: [
      "Custom chatbot development",
      "NLP integration",
      "Multi-platform support",
      "Analytics dashboard",
      "Integration services",
      "24/7 availability"
    ],
    benefits: [
      "Improved customer service",
      "Reduced support costs",
      "Increased engagement",
      "Scalable solutions"
    ]
  },
  "ai-security": {
    title: "AI Security",
    description: "Secure and reliable AI implementation strategies",
    longDescription: "Our AI security services ensure your AI implementations are robust, reliable, and protected against vulnerabilities. We help you build trust in your AI systems through comprehensive security measures.",
    features: [
      "Security assessment",
      "Vulnerability testing",
      "Privacy protection",
      "Compliance checking",
      "Monitoring setup",
      "Incident response"
    ],
    benefits: [
      "Enhanced security",
      "Regulatory compliance",
      "Risk mitigation",
      "Stakeholder trust"
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
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Link to="/services">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  const handleContactClick = () => {
    toast({
      title: "Contact Request Sent",
      description: "We'll get back to you shortly about our " + service.title + " services.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">{service.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg"
            >
              Contact Us About This Service
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;