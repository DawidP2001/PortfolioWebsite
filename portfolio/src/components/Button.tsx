interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, style }) => {
    return (
        <button
            className={
                `text-white px-4 py-2 bg-[var(--primary-colour)] rounded-lg cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-200  ${className}`
            }
            style={style}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
export default Button;