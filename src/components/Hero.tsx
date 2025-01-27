import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background with glossy glow */}
      <div className="absolute inset-0 bg-[#1A1F2C]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#221F26] via-[#9b87f5] to-[#F97316] animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9] via-[#8B5CF6] to-transparent animate-gradient-y"></div>
          <div className="absolute inset-0 bg-[linear-gradient(40deg,#0EA5E9,#D946EF,#F97316)] opacity-40 animate-aurora"></div>
          {/* Glossy glow effects */}
          <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/30 rounded-full filter blur-[64px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500/30 rounded-full filter blur-[64px] animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-orange-500/30 rounded-full filter blur-[64px] animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white animate-fade-in backdrop-blur-sm px-4">
            AI That Works for{" "}
            <span className="text-white animate-glow relative">
              You!
              <span className="absolute inset-0 blur-sm bg-[#1A1F2C]/30 animate-pulse"></span>
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-0 text-xl sm:text-2xl md:text-3xl lg:text-5xl">Seamlessly Automating Your Operations</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 backdrop-blur-sm px-4">
            Empowering businesses with AI-powered automation for streamlined
            operations, cost reduction and exponential growth.
          </p>
          <div className="flex justify-center px-4">
            <Link to="/request-demo" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#3f80f6] text-white rounded-full hover:bg-[#3f80f6] hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-sm text-sm sm:text-base">
                Request A Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#1A1F2C] to-transparent"></div>
    </div>
  );
};

export default Hero;