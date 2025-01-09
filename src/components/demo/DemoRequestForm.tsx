import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-[#1A1F2C] text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="email">Business Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#1A1F2C] text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-[#1A1F2C] text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="jobTitle">Job Title *</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="bg-[#1A1F2C] text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#1A1F2C] text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="bg-[#1A1F2C] text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[100px] bg-[#1A1F2C] text-white border-gray-700"
            placeholder="Tell us about your needs and how we can help"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey="6LdAFLMqAAAAAHFoq00Fpb3BeT7_HMAedAOTAua1"
          onChange={handleRecaptchaChange}
          theme="dark"
        />
      </div>

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