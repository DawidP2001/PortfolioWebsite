interface ProjectThumbnailProps {
    title?: string;
    tags?: string;
    className?: string;
    imgSrc?: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, tags, className, imgSrc }) => {
    return (
        <div className={`mb-4 bg-[var(--secondary-colour)] border-gray-800 border shadow-xl rounded-xs cursor-pointer `+ className}>
            <img src={imgSrc} alt={title} className="w-full object-cover mb-1 " />
            <div className="p-1">
                <p className="text-left text-gray-200 font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-gray-200 text-xs pb-2">{tags}</p>
            </div>
        </div>
    );
}

export default ProjectThumbnail;