import {
  HeadphonesIcon,
  MessageCircle,
  BookOpen,
  Video,
} from "lucide-react";
import { useState } from "react";
import ChatBot from "../chat/ChatBot";

const channels = [
  {
    title: "24/7 Support",
    description: "Get help anytime via our support hotline +1 (719) 886-8868",
    icon: HeadphonesIcon,
  },
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
    action: "chat",
  },
  {
    title: "Knowledge Base",
    description: "Find answers in our documentation",
    icon: BookOpen,
  },
  {
    title: "Video Tutorials",
    description: "Learn through our video guides",
    icon: Video,
  },
];

const SupportChannels = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChannelClick = (action?: string) => {
    if (action === "chat") {
      setIsChatOpen(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className={`bg-[#1A1F2C] p-6 rounded-lg shadow hover:shadow-lg transition-shadow ${
              channel.action ? "cursor-pointer" : ""
            }`}
            onClick={() => handleChannelClick(channel.action)}
          >
            <channel.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">
              {channel.title}
            </h3>
            <p className="text-gray-300">{channel.description}</p>
          </div>
        ))}
      </div>
      {isChatOpen && <ChatBot initiallyOpen={true} onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default SupportChannels;