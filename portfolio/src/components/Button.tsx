interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "", style, size = "medium" }) => {
    let sizeClasses = "";
    switch (size) {
        case "small":
            sizeClasses = "text-sm px-2 py-1";
            break;
        case "large":
            sizeClasses = "text-lg px-6 py-3";
            break;
        case "medium":
        default:
            sizeClasses = "text-base px-4 py-2";
    }
    return (
        <button
            className={
                `text-white bg-[var(--primary-colour)] rounded-lg cursor-pointer hover:opacity-80 hover:scale-110 active:scale-95 active:opacity-90 touch-manipulation transition-all duration-200 ${sizeClasses} ${className}`
            }
            style={style}
            onClick={(e) => {
                onClick();
                e.currentTarget.blur();
            }}
        >
            {label}
        </button>
    );
};
export default Button;