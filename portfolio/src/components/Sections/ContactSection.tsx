interface ContactSectionProps {
    className?: string;
}
const ContactSection: React.FC<ContactSectionProps> = ({className}) => {
    return (
        <section className={"contact-section my-2 p-4 " + className}>
            <h1>Contact Me</h1>
            <p className="">If you'd like to get in touch, feel free to reach out!</p>
            <div className="flex space-x-4 mt-4">
                <img className="h-10" src="/Icons/github.png"/>
                <img className="h-10" src="/Icons/Linkedin.png"/>
                <img className="h-10" src="/Icons/youtube.png"/>
            </div>
            <p className="text-left">or email me at <a>dawidpionk01@gmail.com</a></p>
        </section>
    );
};
export default ContactSection;