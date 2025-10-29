interface TagProps {
    text: string;
    className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
    return (
        <span className={`inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-1 mb-1 ` + className}>
            {text}
        </span>
    );
}

export default Tag;