import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  className?: string;
  sideMenuOpen: boolean;
  setSideMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({className, sideMenuOpen, setSideMenuOpen}) => {
  return (
    <AnimatePresence>
      {!sideMenuOpen && (
        <motion.nav
          key="navbar"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={
            "fixed top-2 left-2 p-2 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg z-50" +
            (className ? " " + className : "")
          }
          style={{backgroundColor: "rgba(157, 186, 255, 0.5)"}}
          onClick={() => setSideMenuOpen(true)}
        >
          <img src="/Icons/burger-bar.png" alt="Menu Icon" className="w-8 h-8 z-10 relative"/>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;