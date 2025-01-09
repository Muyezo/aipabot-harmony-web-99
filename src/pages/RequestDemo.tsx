import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DemoRequestForm from "@/components/demo/DemoRequestForm";

const RequestDemo = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: any) => {
    try {
      setIsSubmitting(true);
      
      // Verify reCAPTCHA
      const recaptchaResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: formData.recaptchaToken }),
      });

      const recaptchaData = await recaptchaResponse.json();
      
      if (!recaptchaData.success) {
        toast({
          title: "Error",
          description: "reCAPTCHA verification failed. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Submit to Supabase
      const { error } = await supabase
        .from("demo_requests")
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          company: formData.company,
          job_title: formData.jobTitle,
          phone: formData.phone,
          country: formData.country,
          message: formData.message,
        }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your demo request has been submitted. We'll contact you soon!",
      });

      navigate("/");
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience AI That Works for You
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our AI solutions can transform
            your business operations and drive growth.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <DemoRequestForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;