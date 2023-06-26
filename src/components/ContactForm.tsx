import { FormEvent, useState } from "react";
import Button from "./Button";
import ContactChannel from "./ContactChannel";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Message sent:", name, email, phone, message);

    setMessageSent(true);
  };

  return (
    <div
      className="h-[806px] bg-contact bg-no-repeat bg-left-bottom flex items-center m-auto"
      id="contact"
    >
      <div className="flex mx-auto items-center">
        <div className="h-[206px] flex flex-col justify-between">
          <ContactChannel type="email" contact="faun@faun.com" />
          <ContactChannel type="whatsapp" contact="+55 (41) 9999-9999" />
        </div>
        <div>
          {messageSent ? (
            <p className="w-[390px] ml-[258px] font-raleway  text-gray text-[30px]">
              Thank you for your message!
              <br />
              Someone from our team will contact you soon.
            </p>
          ) : (
            <form
              onSubmit={handleMessageSubmit}
              className="w-[390px] ml-[258px]"
            >
              <FormInput
                name="name"
                placeholder="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput
                name="email"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormInput
                name="phone"
                placeholder="phone"
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
              />
              <FormTextArea
                name="message"
                placeholder="message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="flex flex-row-reverse">
                <Button text="Enviar" version="small" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
