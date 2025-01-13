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

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Service-related responses
    if (lowerMessage.includes("appointment") || lowerMessage.includes("scheduling")) {
      return "Our AI Appointment Voice Agent can help streamline your scheduling process. It handles scheduling, rescheduling, and cancellations with natural conversational abilities, available 24/7. Would you like to learn more about its features?";
    }
    
    if (lowerMessage.includes("customer service") || lowerMessage.includes("support")) {
      return "Our Intelligent Customer Service Agent provides advanced AI-powered support across multiple channels. It understands context, handles complex queries, and delivers personalized assistance. Would you like to know more about how it can help your business?";
    }
    
    if (lowerMessage.includes("sales") || lowerMessage.includes("leads")) {
      return "Our AI Customer Acquisition Agent is designed to boost your sales performance by qualifying leads, nurturing prospects, and driving conversions through intelligent conversations. Would you like to discuss how it can help grow your business?";
    }

    // Company information
    if (lowerMessage.includes("about") || lowerMessage.includes("company")) {
      return "AipaBOT is dedicated to empowering businesses with cutting-edge AI solutions that streamline operations, reduce costs, and drive sustainable growth. We make advanced technology accessible and practical for organizations of all sizes. Would you like to know more about our specific solutions?";
    }

    // Demo request
    if (lowerMessage.includes("demo") || lowerMessage.includes("try")) {
      return "I'd be happy to help you schedule a demo! You can request a demo through our website, and our team will contact you to schedule a personalized demonstration tailored to your needs. Would you like me to guide you to the demo request form?";
    }

    // Pricing or costs
    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Our pricing is customized based on your specific needs and business size. I'd recommend scheduling a demo where we can discuss your requirements and provide detailed pricing information. Would you like to schedule a demo?";
    }

    // Integration questions
    if (lowerMessage.includes("integrate") || lowerMessage.includes("implementation")) {
      return "Our solutions are designed to integrate seamlessly with your existing systems. We provide comprehensive support during implementation, including technical assistance, training, and ongoing maintenance. Would you like to discuss specific integration requirements?";
    }

    // Default response for unknown queries
    return "I understand you're interested in learning more about our AI solutions. Could you please specify which aspect you'd like to know more about? I can tell you about our appointment scheduling, customer service, or sales automation solutions.";
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