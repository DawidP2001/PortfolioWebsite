interface SectionTitleProps {
    title: string;
    className?: string;
    titleSize?: "normal" | "small";
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title, className, titleSize="normal" }) => {
    return (
        <>
            {titleSize === "normal" ? <h1 className={`text-3xl font-bold mb-6 text-gray-800 section-title sm:text-4xl ${className || ''}`}>
                {title}
            </h1> : <h2 className={`text-2xl mb-4 text-gray-800  ${className || ''}`}>
                {title}
            </h2>}
        </>
    );
}

export default SectionTitle;