import { useState } from "react";
import { Button } from "@/components/ui/button";
import DemoFormFields from "./DemoFormFields";
import DemoRecaptcha from "./DemoRecaptcha";

interface DemoRequestFormProps {
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
}

const DemoRequestForm = ({ onSubmit, isSubmitting }: DemoRequestFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    message: "",
    recaptchaToken: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setFormData((prev) => ({ ...prev, recaptchaToken: token || "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.recaptchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <DemoFormFields formData={formData} onChange={handleChange} />
      <DemoRecaptcha onChange={handleRecaptchaChange} />
      <Button
        type="submit"
        disabled={isSubmitting || !formData.recaptchaToken}
        className="w-full bg-[#3f80f6] hover:bg-[#3f80f6]/90"
      >
        {isSubmitting ? "Submitting..." : "Request Demo"}
      </Button>
    </form>
  );
};

export default DemoRequestForm;