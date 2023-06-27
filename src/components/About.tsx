import AboutImage from "../assets/images/thumb-about-us.png";

const About = () => {
  return (
    <div
      className="h-[770px] bg-about bg-no-repeat pt-[160px]  max-md:pt-[60px]"
      id="about"
    >
      <div className="max-w-[1280px] flex items-center left-0 right-0 mx-auto justify-between px-[24px] max-md:flex-col">
        <div className="xl:max-w-[508px] lg:max-w-[400px] md:max-w-[300px] max-sm:pb-[40px]">
          <h1 className="uppercase font-oswald font-semibold text-[46px] text-blackTitle pb-[40px]">
            About Us
          </h1>
          <p className="font-raleway text-[17px] leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget
            risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet
            ultrices turpis vestibulum at.
          </p>
        </div>
        <div className="max-w-[691px] relative animate-fade-in-right">
          <img src={AboutImage} alt="Band Image" className="" />
          <p className="max-sm:top-[75%] max-md:top-[80%] md:top-[70%] lg:top-[80%] right-[-18%] max-2xl:right-[-3%]   uppercase font-oswald font-semibold text-[140px] text-red absolute max-sm:text-[70px] sm:text-[100px]">
            Concert
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
