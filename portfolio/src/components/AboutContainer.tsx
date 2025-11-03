/**
 * AboutContainer.tsx
 * Container component for displaying about me information. These are the  boxes in the about me section on desktop.
 */
interface AboutContainerProps {
    className?: string;
    title: string;
    description: string;
    imgSrc: string;
    imgClassName?: string;
    imgStyle?: React.CSSProperties;
}
const AboutContainer: React.FC<AboutContainerProps> = ({className, title, description, imgSrc, imgClassName, imgStyle}) => {
    return (
        <div className={"about-container flex flex-col items-start relative text-gray-800 text-left bg-white rounded-lg shadow-md p-4 border-l-4 border-red-400 pr-20  transition-all duration-300 sm:hover:scale-105 transform " + className}>
            <img src={imgSrc} alt={title} className={"w-6 h-6 rounded-full mb-4 absolute right-4 top-4 " + imgClassName} style={imgStyle}/>
            <h2 className="about-title text-red-400 text-lg ">{title}</h2>
            <p className="about-description text-sm">{description}</p>
        </div>
    );
}

export default AboutContainer;