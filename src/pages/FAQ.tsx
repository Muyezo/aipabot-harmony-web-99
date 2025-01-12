import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-gray-300">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What is AipaBOT?</h2>
              <p>
                AipaBOT is an AI-powered platform that provides intelligent voice agents for appointment scheduling, customer service, and sales automation. Our solutions help businesses streamline their operations and enhance customer interactions through advanced artificial intelligence technology.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">How does the AI Appointment Voice Agent work?</h2>
              <p>
                Our AI Appointment Voice Agent uses natural language processing to handle appointment scheduling calls. It can understand customer requests, check availability, schedule appointments, and send confirmations - all while maintaining a natural, conversational interaction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Is my data secure with AipaBOT?</h2>
              <p>
                Yes, we take data security very seriously. We implement industry-standard encryption protocols, regular security audits, and strict data protection measures. All data is processed in compliance with GDPR and other relevant privacy regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Can I customize the AI agents for my business?</h2>
              <p>
                Absolutely! Our AI agents can be customized to match your brand voice, business rules, and specific requirements. We work closely with you to ensure the AI solutions integrate seamlessly with your existing systems and processes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What kind of support do you provide?</h2>
              <p>
                We provide comprehensive support including:
              </p>
              <ul>
                <li>24/7 technical support</li>
                <li>Dedicated account manager</li>
                <li>Regular system updates and maintenance</li>
                <li>Training and onboarding assistance</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">How do I get started with AipaBOT?</h2>
              <p>
                Getting started is easy! Simply request a demo through our website, and our team will contact you to schedule a personalized demonstration. We'll assess your needs and recommend the best solutions for your business.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What industries do you serve?</h2>
              <p>
                AipaBOT serves a wide range of industries including:
              </p>
              <ul>
                <li>Healthcare and Medical Practices</li>
                <li>Professional Services</li>
                <li>Retail and E-commerce</li>
                <li>Hospitality and Tourism</li>
                <li>Financial Services</li>
                <li>And many more!</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;