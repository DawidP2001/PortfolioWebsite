interface ProjectThumbnailProps {
    title?: string;
    tags?: string;
    className?: string;
    imgSrc?: string;
    onclick?: () => void;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, tags, className, imgSrc, onclick }) => {
    return (
        <div className={`mb-4 shadow-lg rounded-xs cursor-pointer border-l-2  border-red-400 `+ className} onClick={onclick}>
            <img src={imgSrc} alt={title} className="w-full object-cover mb-1 " />
            <div className="p-1">
                <p className="text-left text-gray-800 font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-gray-600 text-xs pb-2">{tags}</p>
            </div>
        </div>
    );
}

export default ProjectThumbnail;