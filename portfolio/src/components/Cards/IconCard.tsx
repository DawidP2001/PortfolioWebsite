interface ProjectCardProps {
    className?: string;
    imgClassName?: string;
    imgSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, imgSrc, imgClassName }) => {
    return (
        <div className={`bg-gray-800 rounded-xl shadow-lg `+ className}>
            <img src={imgSrc} alt={"error"} className={`w-full h-full object-cover  ` + imgClassName} />
        </div> 
    );
}

export default ProjectCard;