import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import Hire from "../components/Hire";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <Hire title="Send a message for us" buttonType="section" />
      <ContactForm />
    </>
  );
};

export default Contact;
