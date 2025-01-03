import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#1A1F2C] text-white placeholder:text-gray-400 border-gray-700"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#1A1F2C] text-white placeholder:text-gray-400 border-gray-700"
        />
      </div>
      <div>
        <Input
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-[#1A1F2C] text-white placeholder:text-gray-400 border-gray-700"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px] bg-[#1A1F2C] text-white placeholder:text-gray-400 border-gray-700"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;