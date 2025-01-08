interface ServiceNavigationProps {
  services: Array<{
    id: string;
    title: string;
  }>;
  onServiceClick: (id: string) => void;
}

const ServiceNavigation = ({ services, onServiceClick }: ServiceNavigationProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceClick(service.id)}
          className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-primary transition-colors"
        >
          {service.title}
        </button>
      ))}
    </div>
  );
};

export default ServiceNavigation;