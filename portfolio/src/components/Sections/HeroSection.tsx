import Button from "../Button";

interface HeroSectionProps {
  className?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
  return (
    <section className={"hero-section min-h-screen " + className}>
        <h1>Hi, I'm Dawid Pionk</h1>
        <p>Welcome to my portfolio website!</p>
        <img src="/hero.svg" alt="Hero Image" className="w-64 h-64 mt-4 mx-auto"/>
        <div className="flex items-center justify-center mt-6">
          <Button label="View Projects" onClick={() => {}} className=""/>
          <Button label="View Projects" onClick={() => {}} className=""/>
          <Button label="View Projects" onClick={() => {}} className=""/>
        </div>
    </section>
  );
};

export default HeroSection;