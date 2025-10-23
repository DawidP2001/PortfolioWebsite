interface ContactSectionProps {
    className?: string;
}
const ContactSection: React.FC<ContactSectionProps> = ({className}) => {
    return (
        <section className={"contact-section " + className}>
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out!</p>
        </section>
    );
};
export default ContactSection;