interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <nav className={"fixed-top w-100 bg-(--secondary-colour) flex justify-around items-around" + className}>
      <p className="flex items-center">Dawid Pionk</p>
      <div>
        <img src="/burger-bar.png" alt="Menu Icon" className="w-8 h-8 m-2"/>
      </div>
    </nav>
  );
};

export default Navbar;