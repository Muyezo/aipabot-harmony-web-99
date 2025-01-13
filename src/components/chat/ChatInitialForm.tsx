import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ChatInitialFormProps {
  customerInfo: {
    name: string;
    email: string;
  };
  onInfoChange: (field: "name" | "email", value: string) => void;
  onStartChat: () => void;
}

const ChatInitialForm = ({
  customerInfo,
  onInfoChange,
  onStartChat,
}: ChatInitialFormProps) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Your Name"
        value={customerInfo.name}
        onChange={(e) => onInfoChange("name", e.target.value)}
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={customerInfo.email}
        onChange={(e) => onInfoChange("email", e.target.value)}
      />
      <Button onClick={onStartChat} className="w-full">
        Start Chat
      </Button>
    </div>
  );
};

export default ChatInitialForm;