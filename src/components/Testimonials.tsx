import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialType = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
};

const testimonials: TestimonialType[] = [
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "TechCorp Solutions",
    content: "The AI appointment system has revolutionized our scheduling process. We've seen a 40% increase in booking efficiency.",
    rating: 5,
    image: "/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateNow",
    content: "Their AI lead conversion system has transformed our sales pipeline. Conversion rates are up by 60%.",
    rating: 5,
    image: "/photo-1605810230434-7631ac76ec81",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Service Manager",
    company: "Global Retail Inc",
    content: "The AI receptionist has significantly improved our customer response times. It's like having a 24/7 support team.",
    rating: 5,
    image: "/photo-1518770660439-4636190af475",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            See how our AI solutions are transforming businesses
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className="group relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 
                           hover:shadow-xl mx-2 h-full flex flex-col animate-fade-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="absolute -top-4 -right-2 bg-primary/10 p-3 rounded-full">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 flex-grow mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;