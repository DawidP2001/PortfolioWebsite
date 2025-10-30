import Button from "../Button";
import Tag from "../Tag";

interface ProjectCardProps {
    title: string;
    description: string;
    onClick: () => void;
    technologies?: string[];
    links?: {
        github?: string;
        website?: string;
        youtube?: string;
    };
    className?: string;
    imgSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, className, imgSrc, onClick, technologies, links }) => {
    return (
        <div className={`bg-white rounded shadow-lg border-l-4 border-[var(--primary-colour)] relative pb-10 sm:hover:shadow-xl transition-all duration-300 sm:hover:scale-105 transform `+ className} onClick={onClick}>
            <img src={imgSrc} alt={title} className="w-full object-cover mb-1 sm:max-h-[200px]" />
            <div className="hidden sm:flex flex-wrap justify-left gap-1 ml-2 mt-2">
                {technologies?.map((tech, index) => (
                    <Tag key={index} text={tech} className=""/>
                ))}
            </div>
            <div className="p-2 ">
                <p className="text-left text-gray-800 font-semibold mb-0 p-0">{title}</p>
                <p className="text-left text-gray-600 text-xs sm:text-sm pb-4">{description}</p>
            </div>
            <div className="flex pl-2 pb-4 sm:hidden">
                <Button label="View Project" onClick={onClick} />
            </div>
             <div className="sm:flex gap-1 pb-2 hidden absolute bottom-0 left-2 mb-2">
                {links?.github && (
                    <Button 
                        label="Github" 
                        size="small" 
                        className=""
                        onClick={() => window.open(links.github, '_blank')}
                    />
                )}
                {links?.website && (
                    <Button 
                        label="Website" 
                        size="small" 
                        className=""
                        onClick={() => window.open(links.website, '_blank')}
                    />
                )}
                {links?.youtube && (
                    <Button 
                        label="YouTube" 
                        size="small" 
                        className=""
                        onClick={() => window.open(links.youtube, '_blank')}
                    />
                )}
            </div>
        </div>
    );
}

export default ProjectCard;