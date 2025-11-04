import { motion } from "framer-motion";
import AboutContainer from "../AboutContainer";
import SectionTitle from "../SectionTitle";

interface WorkSectionProps {
    className?: string;
    title?: boolean
}

const WorkSection: React.FC<WorkSectionProps> = ({ className, title=true }) => {
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
            <AboutContainer title="Innobee Innovation Platform" description="Full Stack Developer" imgSrc="/Icons/Innobee.png" className="mb-4" imgClassName="hue-rotate-[290deg]" date="2025"/>
            <AboutContainer title="Freelance" description="Frontend Developer" imgSrc="/SkillIcons/atom.png" className="mb-4" imgClassName="hue-rotate-[140deg]" date="2025"/>
            <h2 className="text-gray-800 text-lg text-left ml-1">Education</h2>
            <AboutContainer 
                title="South East Technological University, Carlow" 
                description="Bachelor of Science (Honours) in Software Engineering" 
                imgSrc="/Icons/college.png" 
                className="mb-4" 
                imgStyle={{filter: "invert(10%) sepia(90%) saturate(7492%) hue-rotate(340deg) brightness(100%) contrast(70%)"}}
                date="2021-2025"
            />
        </motion.div>
    );
};
export default WorkSection;
