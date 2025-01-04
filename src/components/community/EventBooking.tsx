import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  capacity: number;
  spots_taken: number;
  description: string | null;
}

const EventBooking = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [bookedEvents, setBookedEvents] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    fetchEvents();
    if (session?.user) {
      fetchUserBookings();
    }
  }, [session]);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("status", "upcoming")
      .order("date", { ascending: true });

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

  const fetchUserBookings = async () => {
    if (!session?.user?.id) return;

    const { data, error } = await supabase
      .from("event_bookings")
      .select("event_id")
      .eq("user_id", session.user.id);

    if (error) {
      toast({
        title: "Error fetching bookings",
        description: error.message,
        variant: "destructive",
      });
    } else if (data) {
      setBookedEvents(data.map((booking) => booking.event_id));
    }
  };

  const handleBookEvent = async (eventId: string) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to book events.",
        variant: "destructive",
      });
      return;
    }

    if (bookedEvents.includes(eventId)) {
      toast({
        title: "Already Booked",
        description: "You have already booked this event.",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("event_bookings").insert({
      event_id: eventId,
      user_id: session.user.id,
    });

    if (error) {
      toast({
        title: "Booking failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setBookedEvents([...bookedEvents, eventId]);
      toast({
        title: "Event Booked!",
        description: "You have successfully booked this event.",
      });
    }
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
      <h2 className="text-2xl font-semibold mb-6 text-center">Book an Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{format(new Date(event.date), "h:mm a")}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>
                  {event.capacity - event.spots_taken} spots left
                </span>
              </div>
            </div>

            <Button
              className="w-full"
              onClick={() => handleBookEvent(event.id)}
              disabled={bookedEvents.includes(event.id)}
            >
              {bookedEvents.includes(event.id) ? "Booked" : "Book Now"}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventBooking;