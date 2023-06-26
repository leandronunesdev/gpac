import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <div className="h-[774px] bg-hire bg-black text-white flex flex-col items-center bg-fixed bg-no-repeat bg-cover bg-center">
      <h1 className="uppercase text-[69px] font-bebasNeue pt-[224px] pb-[50px]">
        Want to hire us?
      </h1>
      <p className="max-w-[617px] text-center font-raleway text-[13px] leading-[34px] pb-[40px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
        tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus
        vehicula rutrum. Vestibulum pulvinar sapien.
      </p>
      <Link to="/contact">
        <button className="text-[28px] font-bebasNeue border-2 pt-[22px] px-[40px] pb-[16px]">
          Contact with us
        </button>
      </Link>
    </div>
  );
};

export default Hire;
