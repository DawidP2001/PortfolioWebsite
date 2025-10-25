interface ProjectCardProps {
    title: string;
    description: string;
    className?: string;
    imgSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, className, imgSrc }) => {
    return (
        <div className={`mb-4 bg-[var(--secondary-colour)] border-gray-800 border shadow-xl rounded-xs `+ className}>
            <img src={imgSrc} alt={title} className="w-full object-cover mb-1 " />
            <div className="p-1">
                <p className="text-left text-gray-200 font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-gray-200 text-xs pb-2">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;