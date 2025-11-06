import { motion } from "framer-motion";
import Button from "../Button";
import "./animations.scss";


interface HeroSectionProps {
  className?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
    const onDownloadCV = () => {
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'Dawid_Pionk_CV.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    };
    const scrollToSection = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  return (
      <section id="hero" className={"hero-section min-h-screen flex flex-col items-center justify-center " + className}>
          <div className="animation-wrapper">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="sm:flex items-center justify-center space-x-10 mx-4"
          >
            <div className="m-0">
              <h1 className="z-10 font-extrabold text-4xl sm:text-5xl mx-auto text-center text-white">
                Hi, I'm Dawid Pionk
              </h1>
              <p className="z-10 text-white">Welcome to my portfolio website!</p>
              <div className="hidden sm:flex flex-row items-center justify-center mt-6 z-10 space-x-4 mx-2">
                <Button label="Download Resume" onClick={onDownloadCV} className="z-10"/>
              <Button label="Contact Me" onClick={() => scrollToSection('contact')} className="z-10"/>
              </div>
            </div>
            <img src="/hero.svg" alt="Hero Image" className="w-64 h-64 sm:w-100 sm:h-100 mt-4 mx-auto z-10"/>
            <div className="sm:hidden flex flex-row items-center justify-center mt-6 z-10 space-x-4 mx-2">
              <Button label="Download Resume" onClick={onDownloadCV} className="z-10"/>
              <Button label="Contact Me" onClick={() => scrollToSection('contact')} className="z-10"/>
            </div>
          </motion.div>
      </section>
  );
};

export default HeroSection;