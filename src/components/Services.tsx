import { Phone, Users, HeadphonesIcon, Bot } from "lucide-react";

const services = [
  {
    title: "AI Appointment Voice Agent",
    description: "Streamline your scheduling with intelligent voice assistance",
    icon: Phone,
  },
  {
    title: "AI Lead Conversion",
    description: "Convert prospects into customers with AI-powered engagement",
    icon: Users,
  },
  {
    title: "AI Receptionist",
    description: "24/7 professional reception service powered by AI",
    icon: HeadphonesIcon,
  },
  {
    title: "Customer Service Agent",
    description: "Instant support and resolution for customer inquiries",
    icon: Bot,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive AI solutions for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out 
                       hover:shadow-xl hover:-translate-y-2 hover:bg-primary/5
                       animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 
                          group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-6 h-6 text-primary transition-all duration-300 
                                    group-hover:text-primary/80 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 
                         transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 
                        group-hover:text-gray-700">
                {service.description}
              </p>
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl 
                          group-hover:border-primary/20 transition-all duration-300 
                          pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;