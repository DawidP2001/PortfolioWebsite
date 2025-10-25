interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <nav className={"fixed top-0 w-full bg-(--secondary-colour) flex justify-start space-x-5 " + className}>
      <div>
        <img src="/Icons/burger-bar.png" alt="Menu Icon" className="w-8 h-8 m-2"/>
      </div>
      <p className="flex items-center text-2xl">Dawid Pionk</p>
    </nav>
  );
};

export default Navbar;