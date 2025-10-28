import { motion } from "framer-motion";
import IconCard from "../Cards/IconCard";

interface ContactSectionProps {
    className?: string;
}
const ContactSection: React.FC<ContactSectionProps> = ({className}) => {
    return (
        <section 
            className={"contact-section pb-20 " + className}
            style={{background: "linear-gradient(to bottom, var(--dominant-colour) 80%, var(--secondary-colour) 100%"}}
        >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }} // 'once' means animate only the first time, 'amount' is how much should be visible
            >
            <h1 className="font-extrabold text-5xl drop-shadow-lg mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">Skills</h1>
            <div className="grid grid-cols-6 mx-2 gap-2">
                <IconCard imgSrc="/SkillIcons/atom.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/ASM.png" className="w-full h-full" imgClassName="bg-gray-200 rounded-xl"/>
                <IconCard imgSrc="/SkillIcons/AWS.png" className="w-full h-full" imgClassName="bg-gray-200 rounded-xl"/>
                <IconCard imgSrc="/SkillIcons/c-sharp.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/c-.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/css.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/database.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/docker.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/html.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/java.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/js.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/letter-c.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/python.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/tailwind.png" className="w-full h-full" imgClassName="rounded-full"/>
                <IconCard imgSrc="/SkillIcons/typescript.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/solidity.png" className="w-full h-full" imgClassName="bg-gray-200 rounded-xl"/>
                <IconCard imgSrc="/SkillIcons/mongodb.png" className="w-full h-full" imgClassName="rounded-md"/>
                <IconCard imgSrc="/SkillIcons/github.png" className="w-full h-full" imgClassName="invert"/>
                <IconCard imgSrc="/SkillIcons/kubernetes.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/flask.png" className="w-full h-full" imgClassName="invert"/>
                <IconCard imgSrc="/SkillIcons/django.png" className="w-full h-full" imgClassName="rounded-xl"/>
                <IconCard imgSrc="/SkillIcons/php.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/nodejs.png" className="w-full h-full"/>
                <IconCard imgSrc="/SkillIcons/tensorflow.png" className="w-full h-full"/>
            </div>
            </motion.div>
        </section>
    );
};
export default ContactSection;