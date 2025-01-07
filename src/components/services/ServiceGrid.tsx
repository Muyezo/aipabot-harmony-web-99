import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, PhoneCall, HeadphonesIcon, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Calendar,
    title: "AI Appointment Voice Agent",
    description: "Streamline appointment scheduling with AI voice assistance",
    path: "/services/ai-appointment-agent"
  },
  {
    icon: PhoneCall,
    title: "AI Receptionist",
    description: "24/7 intelligent front desk solution",
    path: "/services/ai-receptionist"
  },
  {
    icon: HeadphonesIcon,
    title: "Intelligent Customer Service Agent",
    description: "Advanced AI-powered customer support",
    path: "/services/intelligent-customer-service"
  },
  {
    icon: Users,
    title: "AI Customer Acquisition/Lead Conversion Agent",
    description: "Convert leads with AI precision",
    path: "/services/ai-sales-agent"
  }
];

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link to={service.path} className="block h-full">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group bg-[#1A1F2C] border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
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