import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

interface AboutmeSectionProps {
  className?: string;
}

const AboutmeSection: React.FC<AboutmeSectionProps> = ({className}) => {
    return (
        <section id="about" className={"aboutme-section relative mb-20 flex justify-center " + className}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-[400px] sm:max-w-[1000px]"
            >
              <SectionTitle title="About Me" className="sm:mb-8"/>
              <div className="sm:grid sm:grid-cols-2 sm:mx-4">
                <img src="/Me/1.png" alt="About Me Image" className="border-red-400 my-4 mx-auto rounded-full w-3/4 max-w-75 border-2 sm:hover:shadow-xl transition-all duration-300 sm:hover:scale-105 transform"/>
                <p className="text-left px-5 text-sm sm:text-base text-gray-800 sm:pt-12">
                  I am a recent graduate from South East Technological University with First Class Honours in Bachelor of Science (Honours) in Software Engineering. I am passionate in the fields of Full-Stack-Development, Cloud Computing and Machine Learning. I also have some experience working as a full stack developer as well as some freelance work as a front end developer.
                  <br></br><br></br>You can check out my projects such as sentiment analysis for Reddit, an assembly space shooter arcade game as well as java bytecode interpreter teaching tool. I also have a machine learning portfolio containing notebooks of several models I have studied.
                </p>
              </div>
            </motion.div>
        </section>
    );
};
export default AboutmeSection;