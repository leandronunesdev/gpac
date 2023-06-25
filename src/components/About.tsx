import AboutImage from "../assets/images/thumb-about-us.png";

const About = () => {
  return (
    <div className="h-[770px] bg-about bg-no-repeat pt-[160px]  max-sm:pt-[60px]">
      <div className="max-w-[1280px] flex items-center left-0 right-0 mx-auto justify-between px-[24px] max-sm:flex-col">
        <div className="xl:max-w-[508px] lg:max-w-[400px] md:max-w-[300px] sm:max-w-[200px] max-sm:pb-[40px]">
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
        <div className="max-w-[691px] relative">
          <img src={AboutImage} alt="Band Image" className="" />
          <p className="uppercase font-oswald font-semibold text-[140px] text-red absolute md:top-[350px] md:right-[-60px] sm:top-[170px] max-sm:right-[-20px] max-sm:top-[150px] max-sm:text-[70px] sm:text-[100px]">
            Concert
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;