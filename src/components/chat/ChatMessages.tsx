import { Message } from "./types";

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <div className="h-96 overflow-y-auto mb-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.is_bot ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`rounded-lg px-4 py-2 max-w-[80%] ${
              message.is_bot
                ? "bg-muted text-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;