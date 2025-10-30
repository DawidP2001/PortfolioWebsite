import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

interface AboutmeSectionProps {
  className?: string;
}

const AboutmeSection: React.FC<AboutmeSectionProps> = ({className}) => {
    return (
        <section className={"aboutme-section relative mb-20 " + className}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }} // 'once' means animate only the first time, 'amount' is how much should be visible
            >
              <SectionTitle title="About Me" className=""/>
              <img src="/Me/1.png" alt="About Me Image" className="my-4 mx-auto rounded-full w-3/4 max-w-75 border-2"/>
              <p className="text-left px-5 text-base text-gray-800">
                I am a recent graduate from South East Technological University with First Class Honours in Bachelor of Science (Honours) in Software Engineering. I am passionate in the fields of Full-Stack-Development, Cloud Computing and Machine Learning.
                <br></br><br></br>You can check out my projects such as sentiment analysis for Reddit, an assembly space shooter arcade game as well as java bytecode interpreter teaching tool. I also have a machine learning portfolio containing notebooks of several models I have studied.
              </p>
            </motion.div>
        </section>
    );
};
export default AboutmeSection;