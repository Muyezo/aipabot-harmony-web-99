import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import ChatInitialForm from "./ChatInitialForm";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { generateBotResponse } from "./botResponses";
import type { Message, CustomerInfo } from "./types";

interface ChatBotProps {
  initiallyOpen?: boolean;
  onClose?: () => void;
}

const ChatBot = ({ initiallyOpen = false, onClose }: ChatBotProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [step, setStep] = useState<"initial" | "chat">("initial");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);

  useEffect(() => {
    setIsOpen(initiallyOpen);
  }, [initiallyOpen]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleInfoChange = (field: "name" | "email", value: string) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStartChat = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("chat_conversations")
        .insert({
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
        })
        .select()
        .single();

      if (error) throw error;

      setConversationId(data.id);
      setStep("chat");
      
      const welcomeMessage = {
        content: `Hi ${customerInfo.name}! I'm your AI assistant, ready to help you learn more about our AI solutions. Feel free to ask about our services, schedule a demo, or any other questions you might have!`,
        is_bot: true,
      };
      setMessages([welcomeMessage]);
      
      await supabase.from("chat_messages").insert({
        conversation_id: data.id,
        content: welcomeMessage.content,
        is_bot: true,
      });
    } catch (error) {
      console.error("Error starting chat:", error);
      toast({
        title: "Error",
        description: "Failed to start chat. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || !conversationId) return;

    const userMessage = {
      content: currentMessage,
      is_bot: false,
    };

    try {
      await supabase.from("chat_messages").insert({
        conversation_id: conversationId,
        content: currentMessage,
        is_bot: false,
      });

      setMessages((prev) => [...prev, userMessage]);
      setCurrentMessage("");

      // Generate and send bot response
      const botResponse = {
        content: generateBotResponse(currentMessage),
        is_bot: true,
      };

      await supabase.from("chat_messages").insert({
        conversation_id: conversationId,
        content: botResponse.content,
        is_bot: true,
      });

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 shadow-lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      ) : (
        <div className="bg-background border rounded-lg shadow-lg w-96">
          <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-primary-foreground"
            >
              ×
            </Button>
          </div>

          <div className="p-4">
            {step === "initial" ? (
              <ChatInitialForm
                customerInfo={customerInfo}
                onInfoChange={handleInfoChange}
                onStartChat={handleStartChat}
              />
            ) : (
              <>
                <ChatMessages messages={messages} />
                <ChatInput
                  message={currentMessage}
                  onMessageChange={setCurrentMessage}
                  onSendMessage={handleSendMessage}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;