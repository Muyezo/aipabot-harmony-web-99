import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Users, TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
  category: string;
}

const ForumSection = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const forumTopics: ForumTopic[] = [
    {
      id: 1,
      title: "Getting Started with AI Integration",
      author: "TechExplorer",
      replies: 23,
      lastActivity: "2 hours ago",
      category: "Beginners",
    },
    {
      id: 2,
      title: "Best Practices for Automation",
      author: "AutomationPro",
      replies: 45,
      lastActivity: "1 day ago",
      category: "Advanced",
    },
    {
      id: 3,
      title: "Community Projects Showcase",
      author: "ProjectLead",
      replies: 67,
      lastActivity: "3 hours ago",
      category: "Showcase",
    },
  ];

  const handleNewTopic = () => {
    toast({
      title: "Coming Soon",
      description: "New topic creation will be available soon!",
    });
  };

  const filteredTopics = forumTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Community Forum
          </h2>
          <p className="text-lg text-gray-600">
            Join the conversation and connect with other members
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search topics..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={handleNewTopic}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            New Topic
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-primary cursor-pointer">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Started by {topic.author}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {topic.category}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    {topic.replies} replies
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    Active
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    {topic.lastActivity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;