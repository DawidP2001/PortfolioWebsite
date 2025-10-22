interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <nav className={"fixed-top w-100 bg-gray-600 " + className}>
      <p className="text-left">Dawid Pionk</p>
      <div>
        
      </div>
    </nav>
  );
};

export default Navbar;