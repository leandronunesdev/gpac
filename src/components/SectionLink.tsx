import { Link } from "react-scroll";

interface SectionLinkProps {
  to: string;
  text: string;
  onClick: () => void;
}

const SectionLink = ({ to, text, onClick }: SectionLinkProps) => {
  return (
    <Link to={to} smooth={true} duration={500} onClick={onClick}>
      <li className="font-raleway text-[24px] cursor-pointer">{text}</li>
    </Link>
  );
};

export default SectionLink;
