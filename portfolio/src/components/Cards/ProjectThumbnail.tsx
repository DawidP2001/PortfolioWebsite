/**
 * ProjectThumbnail.tsx
 * Thumbnail component to display individual project previews. These are used in the projects page.
 */
interface ProjectThumbnailProps {
    title?: string;
    tags?: string;
    className?: string;
    imgSrc?: string;
    onclick?: () => void;
    underDevelopment?: boolean;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, tags, className, imgSrc, onclick, underDevelopment }) => {
    return (
        <div className={`mb-4 shadow-lg rounded-xs cursor-pointer border-l-2 bg-white border-red-400 hover:scale-105 active:scale-95 touch-manipulation transition-all duration-200 `+ className} onClick={(e) => { if (onclick) onclick(); window.scrollTo({ top: 0, behavior: 'smooth' }); e.currentTarget.blur(); }}>
            <div className="relative">
                <img src={imgSrc} alt={title} className="w-full object-cover mb-1 " />
                {underDevelopment &&
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs">
                        <p className="backdrop-blur-sm bg-gray-500/60 p-1 rounded-lg">Under Development</p>
                    </div>
                }
            </div>
            <div className="p-1">
                <p className="text-left text-gray-800 font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-gray-600 text-xs pb-2">{tags}</p>
            </div>
        </div>
    );
}

export default ProjectThumbnail;