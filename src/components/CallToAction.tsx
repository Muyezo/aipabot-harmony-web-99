import { Phone, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

const CallToAction = () => {
  useEffect(() => {
    // VAPI Call button configuration
    const script = document.createElement('script');
    script.innerHTML = `
      if (typeof vapiInstance === 'undefined') {
        var vapiInstance = null;
        const assistant = "2a53a28d-f870-4ff4-9a0a-482a46caa9a7";
        const apiKey = "591fec56-287b-4df1-b806-a2f27925490b";
        const buttonConfig = {
          position: "bottom-right",
          offset: "40px",
          width: "50px",
          height: "50px",
          idle: {
            color: "rgb(93, 254, 202)",
            type: "pill",
            title: "Meet Reggy",
            subtitle: "",
            icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
          },
          loading: {
            color: "rgb(93, 124, 202)",
            type: "pill",
            title: "Connecting...",
            subtitle: "Please wait",
            icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg",
          },
          active: {
            color: "rgb(255, 0, 0)",
            type: "pill",
            title: "Call is in progress...",
            subtitle: "End the call.",
            icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg",
          },
        };

        (function (d, t) {
          var g = document.createElement(t),
            s = d.getElementsByTagName(t)[0];
          g.src =
            "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
          g.defer = true;
          g.async = true;
          s.parentNode.insertBefore(g, s);
          g.onload = function () {
            window.vapiSDK.run({
              apiKey: apiKey,
              assistant: assistant,
              config: buttonConfig,
            });
          };
        })(document, "script");
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-[#1A1F2C]/60 backdrop-blur-lg rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side with image */}
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-600/10 to-red-600/10 rounded-2xl p-6">
                <img
                  src="/placeholder.svg"
                  alt="AI Agent"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg">
                  <div className="text-2xl font-bold">AI</div>
                </div>
              </div>
            </div>

            {/* Right side with content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Give <span className="text-blue-400">Our AI Agent</span> a Call
                </h2>
                <p className="text-xl text-gray-300">
                  and Experience the Future of Communication!
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-white">Language: English (US)</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="group relative overflow-hidden px-6 py-3 w-full sm:w-auto"
                    variant="default"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform group-hover:scale-105"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      +1 541 569 4668
                    </span>
                  </Button>
                  <Button
                    className="group relative overflow-hidden px-6 py-3 w-full sm:w-auto"
                    variant="outline"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 transition-transform group-hover:scale-105"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      +49 1573 5992309
                    </span>
                  </Button>
                  <Button
                    className="group relative overflow-hidden px-6 py-3 w-full sm:w-auto bg-gradient-to-r from-[#5dfeca] to-[#5d7cca] hover:from-[#4ed3a9] hover:to-[#4d69a9]"
                    onClick={() => window.vapiInstance?.toggle()}
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      Call AI Agent
                    </span>
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                By calling our voice agent, you agree to our{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </a>
                . Please review the policy to understand how your data is collected, used, and protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;