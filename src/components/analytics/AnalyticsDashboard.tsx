import { useSession } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Loader2 } from "lucide-react";

interface AnalyticsData {
  date: string;
  interactions: number;
  tokensUsed: number;
}

const AnalyticsDashboard = () => {
  const session = useSession();

  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ["analytics", session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("ai_interactions")
        .select("created_at, tokens_used")
        .eq("user_id", session?.user?.id)
        .order("created_at", { ascending: true });

      if (error) throw error;

      // Group data by date and aggregate
      const groupedData = data.reduce((acc: { [key: string]: AnalyticsData }, curr) => {
        const date = new Date(curr.created_at).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = {
            date,
            interactions: 0,
            tokensUsed: 0,
          };
        }
        acc[date].interactions += 1;
        acc[date].tokensUsed += curr.tokens_used || 0;
        return acc;
      }, {});

      return Object.values(groupedData);
    },
    enabled: !!session?.user?.id,
  });

  if (!session) return null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <section className="w-full py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Analytics Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-[#1A1F2C]/80 backdrop-blur-lg border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Daily Interactions
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="date"
                    stroke="#ffffff80"
                    tick={{ fill: "#ffffff80" }}
                  />
                  <YAxis stroke="#ffffff80" tick={{ fill: "#ffffff80" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1A1F2C",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                    }}
                  />
                  <Bar
                    dataKey="interactions"
                    fill="#8884d8"
                    name="Interactions"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card className="p-6 bg-[#1A1F2C]/80 backdrop-blur-lg border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Tokens Used
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="date"
                    stroke="#ffffff80"
                    tick={{ fill: "#ffffff80" }}
                  />
                  <YAxis stroke="#ffffff80" tick={{ fill: "#ffffff80" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1A1F2C",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                    }}
                  />
                  <Bar
                    dataKey="tokensUsed"
                    fill="#82ca9d"
                    name="Tokens Used"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;