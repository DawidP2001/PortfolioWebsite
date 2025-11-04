import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface SideMenuProps {
  className?: string;
  setSideMenuOpen: (open: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({className, setSideMenuOpen}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };
  
  return (
    <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={"fixed top-0 left-0 h-full w-3/4 bg-white backdrop-blur-md z-50 " + className}
        style={{backgroundColor: "rgba(157, 186, 255, 0.5)"}}
        onClick={() => setSideMenuOpen(false)} 
    >
        <img src="/Icons/close.png" alt="Close Icon" className="w-8 h-8 z-10 absolute m-4 top-2 right-0"/>
        <div className="flex flex-col items-start space-y-10 mt-5 p-2">
            <a className="text-3xl cursor-pointer" onClick={() => { scrollToSection("hero"); setSideMenuOpen(false); }}>Home</a>
            <a className="text-3xl cursor-pointer" onClick={() => { scrollToSection("about"); setSideMenuOpen(false); }}>About Me</a>
            <a className="text-3xl cursor-pointer" onClick={() => { scrollToSection("work"); setSideMenuOpen(false); }}>Work</a>
            <a className="text-3xl cursor-pointer" onClick={() => { scrollToSection("skills"); setSideMenuOpen(false); }}>Skills</a>
            <a className="text-3xl cursor-pointer" onClick={() => { navigate("/projects"); setSideMenuOpen(false); }}>Projects</a>
            <a className="text-3xl cursor-pointer" onClick={() => { scrollToSection("contact"); setSideMenuOpen(false); }}>Contact</a>
        </div>
    </motion.div>
  );
};

export default SideMenu;