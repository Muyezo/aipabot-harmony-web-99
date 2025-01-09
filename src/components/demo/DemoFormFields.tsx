import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
  message: string;
}

interface DemoFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const DemoFormFields = ({ formData, onChange }: DemoFormFieldsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          className="bg-[#1A1F2C] text-white border-gray-700"
        />
      </div>
      <div>
        <Label htmlFor="country">Country *</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={onChange}
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
          onChange={onChange}
          className="min-h-[100px] bg-[#1A1F2C] text-white border-gray-700"
          placeholder="Tell us about your needs and how we can help"
        />
      </div>
    </div>
  );
};

export default DemoFormFields;