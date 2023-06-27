import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-darkGray flex flex-col items-center justify-center h-72">
      <Logo />
      <p className="font-raleway uppercase text-xl text-white text-center">
        Faun template edited by e-tools comunicação digital
      </p>
    </div>
  );
};

export default Footer;
