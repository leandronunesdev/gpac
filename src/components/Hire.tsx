import { Link as PageLink } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";
import Button from "./Button";

interface HireProps {
  title: string;
  buttonType: "page" | "section";
}

const Hire = ({ title, buttonType }: HireProps) => {
  return (
    <div
      className="h-[774px] bg-hire bg-black text-white flex flex-col items-center bg-fixed bg-no-repeat bg-cover bg-center"
      id="contact"
    >
      <h1 className="uppercase text-[69px] font-bebasNeue pt-[224px] pb-[50px]">
        {title}
      </h1>
      <p className="max-w-[617px] text-center font-raleway text-[13px] leading-[34px] pb-[40px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
        tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus
        vehicula rutrum. Vestibulum pulvinar sapien.
      </p>
      {buttonType === "page" ? (
        <PageLink to="/contact">
          <Button text="Contact with us" />
        </PageLink>
      ) : (
        <SectionLink to="contact" smooth={true} duration={500}>
          <Button text="Contact with us" />
        </SectionLink>
      )}
    </div>
  );
};

export default Hire;
