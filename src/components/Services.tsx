import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI Integration",
      shortDesc: "Seamlessly integrate AI into your workflow",
      longDesc: "Transform your business operations with cutting-edge AI solutions. Our integration services ensure smooth implementation of AI technologies tailored to your specific needs.",
      image: "/placeholder.svg"
    },
    {
      title: "Process Automation",
      shortDesc: "Automate repetitive tasks",
      longDesc: "Streamline your operations with intelligent process automation. Reduce manual work and increase efficiency across your organization.",
      image: "/placeholder.svg"
    },
    {
      title: "Data Analytics",
      shortDesc: "Turn data into actionable insights",
      longDesc: "Leverage the power of advanced analytics to make data-driven decisions. Our solutions help you understand and utilize your data effectively.",
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
            Comprehensive solutions to transform your business
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(`service-${index}`)}
                className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-colors"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            id={`service-${index}`}
            className="group mb-32 last:mb-0 scroll-mt-24"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="w-full lg:w-1/2 transform transition-transform duration-500 group-hover:scale-105">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 transform transition-all duration-500 group-hover:translate-x-4 bg-white/10 backdrop-blur-lg p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-200">{service.shortDesc}</p>
                <p className="text-gray-300">{service.longDesc}</p>
                <button className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300">
                  Learn more 
                  <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;