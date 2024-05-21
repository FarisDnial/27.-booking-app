import { Accordion, AccordionItem } from "@nextui-org/react";
import { Container } from "react-bootstrap";

const faqs = [
    {
        question: "How do I book a photoshoot with Lensify?",
        answer: "Booking a photoshoot with Lensify is easy! Simply visit our website and navigate to the booking section, where you can select your preferred date, time, and photography package. Alternatively, you can contact us directly to discuss your requirements and schedule your session."
    },
    {
        question: "What types of photography services does Lensify offer?",
        answer: "Lensify offers a wide range of photography services, including wedding photography, family portraits, corporate headshots, event photography, newborn and maternity photography, engagement sessions, portrait photography, product photography, lifestyle photography, and travel photography."
    },
    {
        question: "How much does a photoshoot with Lensify cost?",
        answer: "Our photography packages vary depending on the type of service, duration of the session, location, and additional features. We offer competitive pricing tailored to meet your specific needs and budget. Contact us for a personalized quote for your photography session."
    },
    {
        question: "Can I customize my photography package with Lensify?",
        answer: "Absolutely! We understand that every client has unique preferences and requirements. We offer customizable photography packages to ensure that your session reflects your individual style and vision. Contact us to discuss your customization options."
    },
    {
        question: "Where is Lensify based, and do you offer services outside of this area?",
        answer: "Lensify is based in Malaysia, but we provide photography services both locally and internationally. Whether you're planning a photoshoot in our hometown or a destination event, we're here to capture your special moments wherever you may be."
    },
    {
        question: "How long does it take to receive the edited photos after the photoshoot?",
        answer: "We strive to deliver your edited photos in a timely manner while maintaining the highest quality standards. The turnaround time depends on the type of session and the volume of images captured. Typically, you can expect to receive your edited photos within 12 days after the photoshoot."
    },
    {
        question: "What safety measures does Lensify have in place during the COVID-19 pandemic?",
        answer: "The health and safety of our clients and team members are our top priority. We adhere to all local health guidelines and regulations to ensure a safe and comfortable photoshoot experience. This may include wearing masks, practicing social distancing, and implementing enhanced sanitation measures."
    },
    {
        question: "Can I order prints or albums of my photos through Lensify?",
        answer: "Yes, we offer a variety of print products and photo albums to help you showcase and preserve your cherished memories. From high-quality prints to custom-designed albums, we can assist you in selecting the perfect keepsakes to complement your photography session."
    },
    {
        question: "What if I need to reschedule or cancel my photoshoot appointment?",
        answer: "We understand that unforeseen circumstances may arise, and we're here to accommodate your needs. Please contact us as soon as possible if you need to reschedule or cancel your appointment, and we'll do our best to find a new date and time that works for you."
    },
    {
        question: "How can I get in touch with Lensify if I have further questions?",
        answer: "If you have any additional questions or inquiries about our photography services, pricing, or availability, please don't hesitate to reach out to us via phone, email, or our website's contact form. Our friendly team is always here to assist you!"
    }
];

export default function FaqAccordian() {
    return (
        <Container id="faq">
            <h2 className="my-5 mx-3 tracking-tight text-black sm:text-4xl">Frequently Ask Questions</h2>
            <Accordion variant="splitted">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={faq.question}>
                        {faq.answer}
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>


    );
}
