import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  spotsLeft: number;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "AI Workshop",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    location: "Virtual",
    capacity: 50,
    spotsLeft: 15,
  },
  {
    id: "2",
    title: "Community Meetup",
    date: "March 20, 2024",
    time: "6:00 PM EST",
    location: "San Francisco",
    capacity: 100,
    spotsLeft: 45,
  },
  {
    id: "3",
    title: "Tech Talk Series",
    date: "March 25, 2024",
    time: "3:00 PM EST",
    location: "Virtual",
    capacity: 200,
    spotsLeft: 120,
  },
];

const EventBooking = () => {
  const [bookedEvents, setBookedEvents] = useState<string[]>([]);
  const { toast } = useToast();

  const handleBookEvent = (eventId: string) => {
    if (bookedEvents.includes(eventId)) {
      toast({
        title: "Already Booked",
        description: "You have already booked this event.",
        variant: "destructive",
      });
      return;
    }

    setBookedEvents([...bookedEvents, eventId]);
    toast({
      title: "Event Booked!",
      description: "You have successfully booked this event.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Book an Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event, index) => (
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
                <span>{event.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>{event.spotsLeft} spots left</span>
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