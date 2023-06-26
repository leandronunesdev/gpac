import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactChannelProps {
  type: "email" | "whatsapp";
  contact: string;
}

const ContactChannel = ({ type, contact }: ContactChannelProps) => {
  return (
    <div className="text-gray text-[30px] leading-8">
      <h1 className="font-bebasNeue">
        <FontAwesomeIcon
          icon={type === "email" ? faEnvelope : faWhatsapp}
          className="pr-[8px]"
        />
        {type}
      </h1>
      <p className="font-raleway uppercase">{contact}</p>
    </div>
  );
};

export default ContactChannel;
