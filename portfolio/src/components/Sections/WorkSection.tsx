import { motion } from "framer-motion";
import AboutContainer from "../AboutContainer";
import SectionTitle from "../SectionTitle";

interface WorkSkillSectionProps {
    className?: string;
    title?: boolean
}

const WorkSkillSection: React.FC<WorkSkillSectionProps> = ({ className, title=true }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className={"work-section mx-auto " + className}
        >
            {title ? <SectionTitle title="Experience" className=""/> : null}
            <h2 className="text-gray-800 text-lg text-left ml-1">Work</h2>
            <AboutContainer title="Innobee Innovation Platform" description="Full Stack Developer" imgSrc="/Icons/Innobee.png" className="mb-4" imgClassName="hue-rotate-[290deg]"/>
            <AboutContainer title="Freelance" description="Frontend Developer" imgSrc="/SkillIcons/atom.png" className="mb-4" imgClassName="hue-rotate-[140deg]"/>
            <h2 className="text-gray-800 text-lg text-left ml-1">Education</h2>
            <AboutContainer title="South East Technological University, Carlow" description="Bachelor of Science (Honours) in Software Engineering" imgSrc="/Icons/college.png" className="mb-4" imgStyle={{filter: "brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(7495%) hue-rotate(330deg) brightness(100%) contrast(135%)"}}/>
        </motion.div>
    );
};
export default WorkSkillSection;
