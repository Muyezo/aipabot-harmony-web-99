import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    title: "AI Workshop",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    location: "Virtual",
    description: "Learn about the latest AI trends and applications",
  },
  {
    title: "Community Meetup",
    date: "March 20, 2024",
    time: "6:00 PM EST",
    location: "San Francisco",
    description: "Network with fellow AI enthusiasts and professionals",
  },
  {
    title: "Tech Talk Series",
    date: "March 25, 2024",
    time: "3:00 PM EST",
    location: "Virtual",
    description: "Expert discussions on AI implementation strategies",
  },
];

const EventCalendar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-2 text-primary mb-3">
              <Calendar className="h-5 w-5" />
              <span>{event.date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <p className="text-gray-700">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventCalendar;