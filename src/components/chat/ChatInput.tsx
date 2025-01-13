import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ChatInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

const ChatInput = ({ message, onMessageChange, onSendMessage }: ChatInputProps) => {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Type your message..."
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSendMessage();
          }
        }}
      />
      <Button onClick={onSendMessage}>
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ChatInput;