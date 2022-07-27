import Layout from "/components/layout";
import ContactForm from "/components/contactForm";
import Calendar from "/components/calendar";

export default function Contact() {
    return (
        <Layout title="Contact">
            {/* Make max container width just large enough so that inner calendar hits its max width. This keeps the contact form and calendar widths equal. */}
            <div className="container max-w-[865px] mx-auto">
                <ContactForm />
                <Calendar />
            </div>
        </Layout>
    )
}