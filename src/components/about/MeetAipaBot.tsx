import { motion } from "framer-motion";

const MeetAipaBot = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Meet AipaBOT</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="content-wrapper text-white/80 space-y-6 leading-relaxed"
      >
        <p>
          We have observed that many businesses struggle to manage their daily operations while simultaneously maintaining strong customer relationships. This challenge often arises due to the demands of running a company in terms of time, effort, and costs. AipaBOT was developed as a solution to these common challenges.
        </p>

        <p>
          By implementing AI automation and streamlined workflows, we provide seamless, intelligent, and efficient solutions that simplify your operations, reduce costs, and foster exponential growth. AipaBOT is not just an AI automation agency; we are your trusted partner in transforming the way you do business.
        </p>

        <p>
          At AipaBOT, we believe that advanced technology should be accessible to all. Our goal is to drive sustainable growth and unlock potential in ways you never thought possible. By combining our technical expertise with a deep understanding of your unique needs, we create solutions that not only automate but also elevate your business.
        </p>

        <p>
          In a world that demands innovation, we aim to bridge the gap between your current challenges and your extraordinary future. At AipaBOT, we are shaping a reality where businesses everywhere can harness the full power of artificial intelligence to achieve breakthroughs in efficiency, creativity, and success.
        </p>

        <p>
          At our core, AipaBOT is about people—providing solutions that work for your team, our team, and the communities we serve. We focus on creating simple solutions that not only address today's needs but also pave the way for tomorrow. Join us in reimagining what is possible. Together, let's create the future of work.
        </p>
      </motion.div>
    </section>
  );
};

export default MeetAipaBot;