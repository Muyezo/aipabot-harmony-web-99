import {
  HeadphonesIcon,
  MessageCircle,
  BookOpen,
  Video,
} from "lucide-react";

const channels = [
  {
    title: "24/7 Support",
    description: "Get help anytime via our support hotline",
    icon: HeadphonesIcon,
  },
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {channels.map((channel) => (
        <div
          key={channel.title}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <channel.icon className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
          <p className="text-gray-600">{channel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SupportChannels;