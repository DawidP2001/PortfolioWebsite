import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  className?: string;
  sideMenuOpen: boolean;
  setSideMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({className, sideMenuOpen, setSideMenuOpen}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile Navbar */}
      <AnimatePresence>
        {!sideMenuOpen && (
          <motion.nav
            key="navbar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={
              "fixed top-2 left-2 p-2 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg z-50 md:hidden" +
              (className ? " " + className : "")
            }
            style={{backgroundColor: "rgba(157, 186, 255, 0.5)"}}
            onClick={() => setSideMenuOpen(true)}
          >
            <img src="/Icons/burger-bar.png" alt="Menu Icon" className="w-8 h-8 z-10 relative"/>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg z-50 px-6 py-3" 
           style={{backgroundColor: "rgba(157, 186, 255, 0.5)"}}>
        <div className="flex space-x-8 items-center">
          <a onClick={() => navigate("/")} className="text-white hover:text-gray-200 cursor-pointer transition-colors">Home</a>
          <a onClick={() => navigate("/")} className="text-white hover:text-gray-200 cursor-pointer transition-colors">About</a>
          <a onClick={() => navigate("/")} className="text-white hover:text-gray-200 cursor-pointer transition-colors">Skills</a>
          <a onClick={() => navigate("/projects")} className="text-white hover:text-gray-200 cursor-pointer transition-colors">Projects</a>
          <a onClick={() => navigate("/")} className="text-white hover:text-gray-200 cursor-pointer transition-colors">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;