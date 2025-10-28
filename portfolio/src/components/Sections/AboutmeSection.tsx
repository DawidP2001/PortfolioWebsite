import { motion } from "framer-motion";

interface AboutmeSectionProps {
  className?: string;
}

const AboutmeSection: React.FC<AboutmeSectionProps> = ({className}) => {
    return (
        <section className={"aboutme-section relative " + className}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // 'once' means animate only the first time, 'amount' is how much should be visible
            >
              <h1>About Me</h1>
              <img src="/Me/1.png" alt="About Me Image" className="my-4 mx-auto rounded-full w-3/4 border-2"/>
              <p>I am Dawid Pionk, a passionate developer with experience in building web applications.</p>
            </motion.div>
        </section>
    );
};
export default AboutmeSection;