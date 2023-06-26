import HeroImageOne from "../assets/images/hero.svg";

const ContactHero = () => {
  return (
    <div className="h-[900px] bg-hero-pattern bg-cover bg-no-repeat bg-center bg-darkGray">
      <div className="left-0 right-0 pt-[334px] pb-0 mx-auto flex bg-hero-gray-pattern h-full bg-cover bg-no-repeat bg-center">
        <div className="w-full flex flex-col items-center">
          <img className="animate-fade-in-right" src={HeroImageOne} />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
