interface SideMenuProps {
  className?: string;
  setSideMenuOpen: (open: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({className, setSideMenuOpen}) => {
  return (
    <div 
      className={"fixed top-0 left-0 h-full w-3/4 bg-white backdrop-blur-md z-100 " + className}
      style={{backgroundColor: "rgba(157, 186, 255, 0.5)"}}
      onClick={() => setSideMenuOpen(false)} 
    >
        <img src="/Icons/close.png" alt="Close Icon" className="w-8 h-8 z-10 absolute m-4 right-0"/>
        <div className="flex flex-col items-start space-y-10 mt-5">
            <a className="text-3xl">About Me</a>
            <a className="text-3xl">Skills</a>
            <a className="text-3xl">Projects</a>
            <a className="text-3xl">Contact</a>
        </div>
    </div>
  );
};

export default SideMenu;