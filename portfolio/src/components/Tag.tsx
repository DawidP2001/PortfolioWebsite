interface TagProps {
    text: string;
    className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
    return (
        <span className={`bg-red-200/20 backdrop-blur-lg text-gray-800 text-xs px-2 py-1 rounded-full border border-red-500` + className}>
            {text}
        </span>
    );
}

export default Tag;