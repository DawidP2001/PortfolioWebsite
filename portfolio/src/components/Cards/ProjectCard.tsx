import Button from "../Button";

interface ProjectCardProps {
    title: string;
    description: string;
    className?: string;
    imgSrc?: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, className, imgSrc, onClick }) => {
    return (
        <div className={`mb-12 rounded shadow-lg border-l-4 border-[var(--primary-colour)] `+ className} onClick={onClick}>
            <img src={imgSrc} alt={title} className="w-full object-cover mb-1 " />
            <div className="p-2">
                <p className="text-left text-gray-800 font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-gray-600 text-xs pb-4">{description}</p>
            </div>
            <div className="flex pl-2 pb-4">
                <Button label="View Project" onClick={onClick} />
            </div>
        </div>
    );
}

export default ProjectCard;