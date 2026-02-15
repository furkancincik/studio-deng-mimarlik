import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TeamMember } from "@/types/cms";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

const TeamCard = ({ member, index = 0 }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/team/${member.id}`} className="group block">
        <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
          <div className="w-full h-full bg-muted group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-sans">Photo</span>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-medium text-foreground">
            {member.name || "Team Member Name"}
          </h3>
          <p className="text-sm text-muted-foreground font-sans">
            {member.title || "Title"}
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            {member.expertise || "Area of expertise"}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default TeamCard;
