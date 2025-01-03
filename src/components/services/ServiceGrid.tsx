import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Cpu, BarChart3, Users, Bot, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Expert guidance on implementing AI solutions in your business",
    path: "/services/ai-consulting"
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your specific needs",
    path: "/services/machine-learning"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    path: "/services/data-analytics"
  },
  {
    icon: Users,
    title: "AI Training",
    description: "Comprehensive training programs for your team",
    path: "/services/ai-training"
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description: "Intelligent conversational agents for customer service",
    path: "/services/chatbot-development"
  },
  {
    icon: Lock,
    title: "AI Security",
    description: "Secure and reliable AI implementation strategies",
    path: "/services/ai-security"
  }
];

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link to={service.path} className="block h-full">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;