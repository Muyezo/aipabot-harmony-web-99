import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import { TeamMemberType } from "@/types/team";

interface TeamGridProps {
  members: TeamMemberType[];
}

const TeamGrid = ({ members }: TeamGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <TeamMember key={member.name} {...member} index={index} />
      ))}
    </div>
  );
};

export default TeamGrid;