interface AboutmeSectionProps {
  className?: string;
}

const AboutmeSection: React.FC<AboutmeSectionProps> = ({className}) => {
    return (
        <section className={"aboutme-section min-h-screen " + className}>
            <h2>About Me</h2>
            <p>I am Dawid Pionk, a passionate developer with experience in building web applications.</p>
            <img src="/aboutme-image.png" alt="About Me Image" className="w-64 h-64 mt-4"/>
        </section>
    );
};
export default AboutmeSection;