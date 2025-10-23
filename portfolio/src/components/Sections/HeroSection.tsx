import Button from "../Button";

interface HeroSectionProps {
  className?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
  return (
    <section className={"hero-section w-full min-h-screen" + className}>
        <h1>Hi, I'm Dawid Pionk</h1>
        <p>Welcome to my portfolio website!</p>
        <img src="/hero-image.png" alt="Hero Image" className="w-64 h-64 mt-4"/>
        <div className="flex">
          <Button label="View Projects" onClick={() => {}} className="mr-4"/>
          <Button label="View Projects" onClick={() => {}} className="mr-4"/>
          <Button label="View Projects" onClick={() => {}} className="mr-4"/>
        </div>
    </section>
  );
};

export default HeroSection;