import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Message {
  content: string;
  is_bot: boolean;
}

const ChatBot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"initial" | "chat">("initial");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);

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
      
      // Add welcome message
      const welcomeMessage = {
        content: `Hi ${customerInfo.name}! How can I help you today?`,
        is_bot: true,
      };
      setMessages([welcomeMessage]);
      
      // Save welcome message to database
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
      // Save user message
      await supabase.from("chat_messages").insert({
        conversation_id: conversationId,
        content: currentMessage,
        is_bot: false,
      });

      setMessages((prev) => [...prev, userMessage]);
      setCurrentMessage("");

      // Simulate bot response
      setTimeout(async () => {
        const botResponse = {
          content: "Thank you for your message. Our team will get back to you soon.",
          is_bot: true,
        };

        // Save bot response
        await supabase.from("chat_messages").insert({
          conversation_id: conversationId,
          content: botResponse.content,
          is_bot: true,
        });

        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
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
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground"
            >
              ×
            </Button>
          </div>

          <div className="p-4">
            {step === "initial" ? (
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                <Button onClick={handleStartChat} className="w-full">
                  Start Chat
                </Button>
              </div>
            ) : (
              <>
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
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;