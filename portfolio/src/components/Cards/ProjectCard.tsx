interface ProjectCardProps {
    title: string;
    description: string;
    className?: string;
    imgSrc?: string;
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, className, imgSrc, onClick }) => {
    return (
        <div className={`mb-4 bg-[var(--secondary-colour)] border-gray-800 border shadow-gray-400 shadow-md rounded-xs `+ className} onClick={onClick}>
            <img src={imgSrc} alt={title} className="w-full object-cover mb-1 " />
            <div className="p-1">
                <p className="text-left text-white font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-white text-xs pb-2">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;