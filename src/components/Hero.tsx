import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-[#1A1F2C]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#221F26] via-[#9b87f5] to-[#F97316] animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9] via-[#8B5CF6] to-transparent animate-gradient-y"></div>
          <div className="absolute inset-0 bg-[linear-gradient(40deg,#0EA5E9,#D946EF,#F97316)] opacity-40 animate-aurora"></div>
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            AI That Works for{" "}
            <span className="text-primary animate-glow">You!</span>{" "}
            Seamlessly Automating Your Operations
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-200">
            Empowering businesses with AI-powered automation for streamlined
            operations, cost reduction and exponential growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="group relative px-8 py-3 bg-primary text-white rounded-full overflow-hidden hover:bg-primary/90 transition-all duration-300">
              <div className="absolute inset-0 w-3 bg-white/20 skew-x-[20deg] group-hover:animate-[shimmer_1s_infinite] hidden group-hover:block"></div>
              <span className="relative flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </span>
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1F2C] to-transparent"></div>
    </div>
  );
};

export default Hero;