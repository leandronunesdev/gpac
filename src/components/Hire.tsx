import { Link } from "react-router-dom";
import Button from "./Button";

interface HireProps {
  title: string;
}

const Hire = ({ title }: HireProps) => {
  return (
    <div className="h-[774px] bg-hire bg-black text-white flex flex-col items-center bg-fixed bg-no-repeat bg-cover bg-center">
      <h1 className="uppercase text-[69px] font-bebasNeue pt-[224px] pb-[50px]">
        {title}
      </h1>
      <p className="max-w-[617px] text-center font-raleway text-[13px] leading-[34px] pb-[40px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
        tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus
        vehicula rutrum. Vestibulum pulvinar sapien.
      </p>
      <Link to="/contact">
        <Button text="Contact with us" />
      </Link>
    </div>
  );
};

export default Hire;
