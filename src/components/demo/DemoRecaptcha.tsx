import ReCAPTCHA from "react-google-recaptcha";

interface DemoRecaptchaProps {
  onChange: (token: string | null) => void;
}

const DemoRecaptcha = ({ onChange }: DemoRecaptchaProps) => {
  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};

export default DemoRecaptcha;