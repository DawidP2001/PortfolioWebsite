interface ProjectCardProps {
    className?: string;
    imgSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, imgSrc }) => {
    return (
        <div className={`bg-gray-800 rounded-xl `+ className}>
            <img src={imgSrc} alt={"error"} className="w-full object-cover p-1 " />
        </div>
    );
}

export default ProjectCard;