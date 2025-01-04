import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Event {
  title: string;
  date: string;
  location: string;
  description: string | null;
}

const EventCalendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = useSupabaseClient();
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true })
      .limit(3);

    if (error) {
      toast({
        title: "Error fetching events",
        description: error.message,
        variant: "destructive",
      });
    } else if (data) {
      setEvents(data);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-2 text-primary mb-3">
              <Calendar className="h-5 w-5" />
              <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="h-4 w-4" />
              <span>{format(new Date(event.date), "h:mm a")}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            {event.description && (
              <p className="text-gray-700">{event.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventCalendar;