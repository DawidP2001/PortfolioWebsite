interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            className={
                `text-white px-4 py-2 bg-[var(--primary-colour-button)] rounded cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-200 backdrop-blur-full border border-gray-500 ${className}`
            }
            onClick={onClick}
        >
            {label}
        </button>
    );
};
export default Button;