import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 animate-fade-in">
            AI That Works for{" "}
            <span className="text-primary animate-glow">You!</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Empowering businesses with AI-powered automation for streamlined
            operations, cost reduction and exponential growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="group relative px-8 py-3 bg-primary text-white rounded-full overflow-hidden">
              <div className="absolute inset-0 w-3 bg-white/20 skew-x-[20deg] group-hover:animate-[shimmer_1s_infinite] hidden group-hover:block"></div>
              <span className="relative flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </span>
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;