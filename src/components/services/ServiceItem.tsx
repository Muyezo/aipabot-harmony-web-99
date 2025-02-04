import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItemProps {
  service: {
    id: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    image: string;
  };
  index: number;
}

const ServiceItem = ({ service, index }: ServiceItemProps) => {
  return (
    <div
      id={`service-${service.id}`}
      className="group mb-16 last:mb-0 scroll-mt-24 px-4 sm:px-0"
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
        <div className="w-full lg:w-1/2 transform transition-transform duration-500 group-hover:scale-105">
          {service.id === 'ai-sales-agent' ? (
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-[24rem] h-auto mx-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="relative w-full max-w-[24rem] mx-auto overflow-hidden shadow-2xl rounded-full" style={{
              aspectRatio: '1/1'
            }}>
              <img
                src={service.id === 'ai-appointment-agent' 
                  ? '/lovable-uploads/e6b9125f-3f21-4be5-9a18-01b4306a7a44.png'
                  : service.image}
                alt={service.title}
                className={`w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 ${
                  service.id === 'ai-receptionist' 
                    ? 'object-center' 
                    : 'object-center'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2 space-y-6 transform transition-all duration-500 group-hover:translate-x-4 bg-[#1A1F2C] backdrop-blur-lg p-6 sm:p-8 rounded-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-lg sm:text-xl text-white">{service.shortDesc}</p>
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
  );
};

export default ServiceItem;