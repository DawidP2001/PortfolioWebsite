interface ContactSectionProps {
    className?: string;
}
const ContactSection: React.FC<ContactSectionProps> = ({className}) => {
    return (
        <section className={"contact-section my-2 p-4 " + className}>
            <h1 className="mb-4 font-extrabold text-5xl drop-shadow-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">Contact Me</h1>
            <p className="">If you'd like to get in touch, feel free to reach out!</p>
            <div className="flex space-x-4 mt-4 items-center justify-center">
                <img className="h-10 bg-white rounded-2xl" src="/Icons/github.png"/>
                <img className="h-10 bg-white rounded" src="/Icons/Linkedin.png"/>
                <img className="h-10" src="/Icons/youtube.png"/>
            </div>
            <p className="text-left mt-5">or email me at: <a className="text-blue-400 underline" href="mailto:dawidpionk01@gmail.com">dawidpionk01@gmail.com</a></p>
        </section>
    );
};
export default ContactSection;