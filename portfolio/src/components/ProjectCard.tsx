interface ProjectCardProps {
    title: string;
    description: string;
    className?: string;
    imgSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, className, imgSrc }) => {
    return (
        <div className={`mb-4 `+ className}>
            <img src={imgSrc} alt={title} className="w-full h-48 object-cover mb-1 " />
            <p className="text-left">{title}</p>
            <p className="text-left text-black text-sm">{description}</p>
        </div>
    );
}

export default ProjectCard;