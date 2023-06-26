import { useState } from "react";
import HeroImageOne from "../assets/images/hero.svg";
import HeroImageTwo from "../assets/images/hero_2.svg";

interface ImageOption {
  id: number;
  url: string;
}

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const IMAGE_OPTIONS = [
    { id: 1, url: HeroImageOne },
    { id: 2, url: HeroImageTwo },
    { id: 3, url: HeroImageOne },
    { id: 4, url: HeroImageTwo },
  ];

  return (
    <div className="h-[1180px] bg-hero-pattern bg-cover bg-no-repeat bg-center bg-darkGray w-full">
      <div className="max-sm:pl-2 left-0 right-0 pl-10 pr-0 pt-[334px] pb-0 flex bg-hero-gray-pattern h-full bg-cover bg-no-repeat bg-center w-full">
        <div className="w-[1280px] mx-auto flex">
          <div>
            <ul className="flex flex-col justify-between h-[456px] md:h-[456px] sm:h-[360px] max-sm:h-[180px] pt-4 text-[23px] font-semibold font-oswald text-white">
              {IMAGE_OPTIONS.map((option: ImageOption, index) => {
                return (
                  <li
                    className={`${
                      imageIndex === index ? "opacity-[1]" : "opacity-[0.5]"
                    } cursor-pointer`}
                    onClick={() => setImageIndex(index)}
                    key={option.id}
                  >
                    {option.id}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <img
              className="lg:ml-[20%] animate-fade-in-right"
              src={IMAGE_OPTIONS[imageIndex].url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
