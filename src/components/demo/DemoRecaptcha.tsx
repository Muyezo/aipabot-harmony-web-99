import ReCAPTCHA from "react-google-recaptcha";

interface DemoRecaptchaProps {
  onChange: (token: string | null) => void;
}

const DemoRecaptcha = ({ onChange }: DemoRecaptchaProps) => {
  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        sitekey="6LdAFLMqAAAAAHFoq00Fpb3BeT7_HMAedAOTAua1"
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};

export default DemoRecaptcha;