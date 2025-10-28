interface AboutmeSectionProps {
  className?: string;
}

const AboutmeSection: React.FC<AboutmeSectionProps> = ({className}) => {
    return (
        <section className={"aboutme-section relative " + className}>
            <h1>About Me</h1>
            <img src="/aboutme-image.png" alt="About Me Image" className="w-64 h-64 mt-4 mx-auto"/>
            <p>I am Dawid Pionk, a passionate developer with experience in building web applications.</p>
        </section>
    );
};
export default AboutmeSection;