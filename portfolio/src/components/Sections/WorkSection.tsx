import AboutContainer from "../AboutContainer";
import SectionTitle from "../SectionTitle";

interface WorkSkillSectionProps {
    className?: string;
}

const WorkSkillSection: React.FC<WorkSkillSectionProps> = ({ className }) => {
    return (
        <div className={"work-section mx-auto " + className}>
            <SectionTitle title="Experience" className=""/>
            <h2 className="text-gray-800 text-lg text-left ml-1">Work</h2>
            <AboutContainer title="Innobee Innovation Platform" description="Full Stack Developer" imgSrc="/Icons/close.png" className="mb-4"/>
            <AboutContainer title="Freelance" description="Frontend Developer" imgSrc="/Icons/close.png" className="mb-4"/>
            <h2 className="text-gray-800 text-lg text-left ml-1">Education</h2>
            <AboutContainer title="South East Technological University, Carlow" description="Bachelor of Science (Honours) in Software Engineering" imgSrc="/Icons/close.png" className="mb-4"/>
        </div>
    );
};
export default WorkSkillSection;
