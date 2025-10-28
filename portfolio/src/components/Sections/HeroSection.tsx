import { motion } from "framer-motion";
import Button from "../Button";
import "./animations.scss";


interface HeroSectionProps {
  className?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
  return (
      <section className={"hero-section min-h-screen flex flex-col items-center justify-center " + className}>
          <div className="animation-wrapper">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <h1 className="z-10 font-extrabold text-5xl">
          Hi, I'm <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">Dawid Pionk</span>
        </h1>
          <p className="z-10">Welcome to my portfolio website!</p>
          <img src="/hero.svg" alt="Hero Image" className="w-64 h-64 mt-4 mx-auto z-10"/>
          <div className="flex flex-row items-center justify-center mt-6 z-10 space-x-4 mx-2">
            <Button label="Download Resume" onClick={() => {}} className="z-10"/>
            <Button label="Contact Me" onClick={() => {}} className="z-10"/>
          </div>
          </motion.div>
      </section>
  );
};

export default HeroSection;