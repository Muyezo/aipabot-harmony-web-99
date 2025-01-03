import { Phone, Users, HeadphonesIcon, Bot } from "lucide-react";

const services = [
  {
    title: "AI Appointment Voice Agent",
    description: "Streamline your scheduling with intelligent voice assistance",
    longDescription: "Our AI Appointment Voice Agent revolutionizes how businesses handle scheduling. Using advanced natural language processing, it understands and manages appointment requests with human-like interaction. Available 24/7, it reduces scheduling conflicts, sends automated reminders, and integrates seamlessly with your existing calendar systems.",
    icon: Phone,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "AI Lead Conversion",
    description: "Convert prospects into customers with AI-powered engagement",
    longDescription: "Transform your lead conversion process with our AI-powered system. It analyzes customer behavior patterns, identifies high-potential leads, and engages them with personalized communication. Using machine learning algorithms, it optimizes conversion strategies in real-time, significantly improving your sales pipeline efficiency.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "AI Receptionist",
    description: "24/7 professional reception service powered by AI",
    longDescription: "Experience round-the-clock professional reception services with our AI Receptionist. It handles incoming calls, routes inquiries to appropriate departments, and manages basic customer service requests. With natural language processing capabilities, it provides a seamless, professional first point of contact for your business.",
    icon: HeadphonesIcon,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Customer Service Agent",
    description: "Instant support and resolution for customer inquiries",
    longDescription: "Our AI Customer Service Agent provides immediate, intelligent responses to customer inquiries across multiple channels. Using advanced machine learning, it handles common questions, troubleshooting, and support tickets while continuously learning from interactions to improve its responses. It seamlessly escalates complex issues to human agents when needed.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
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
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center animate-fade-in`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 
                            group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
                <p className="text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
                <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                  Learn more
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;