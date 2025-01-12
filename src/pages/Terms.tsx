import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-gray-300">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
          
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using AipaBOT's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
            <p>
              AipaBOT grants you a limited, non-exclusive, non-transferable, revocable license to access and use our AI services for your personal or business purposes, subject to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Service Description</h2>
            <p>
              AipaBOT provides AI-powered services including but not limited to:
            </p>
            <ul>
              <li>AI Appointment Voice Agent</li>
              <li>Intelligent Customer Service Agent</li>
              <li>AI Customer Acquisition Agent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Not misuse our services</li>
              <li>Comply with all applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Payment Terms</h2>
            <p>
              Users agree to pay all fees according to the pricing plans chosen. All payments are non-refundable unless otherwise specified or required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by AipaBOT and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
            <p>
              AipaBOT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AipaBOT operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us at:
              <br />
              Email: legal@aipabot.com
            </p>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;