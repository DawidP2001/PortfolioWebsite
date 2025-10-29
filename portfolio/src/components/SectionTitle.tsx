interface SectionTitleProps {
    title: string;
    className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
    return (
        <h1 className={"text-3xl font-bold mb-6 text-gray-800 section-title " + className}>
            {title}
        </h1>
    );
}

export default SectionTitle;