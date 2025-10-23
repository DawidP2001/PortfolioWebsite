interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({className}) => {
  return (
    <footer className={"w-100 bg-gray-600 text-center p-3 " + className}>
        <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Febrian Hidayat - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Kiranshastry - Flaticon</a>
    </footer>
  );
};

export default Footer;