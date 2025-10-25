interface NavbarProps {
  className?: string;
  setSideMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({className, setSideMenuOpen}) => {
  return (
    <nav 
      className={"fixed top-2 left-2 p-2 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg " + className}
      style={{backgroundColor: "rgba(157, 186, 255, 0.5)"}}
      onClick={() => setSideMenuOpen(true)}
    >
      <img src="/Icons/burger-bar.png" alt="Menu Icon" className="w-8 h-8 z-10 relative"/>
    </nav>
  );
};

export default Navbar;