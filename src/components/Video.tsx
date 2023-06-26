import VideoFile from "../assets/videos/video.mp4";
import PlayIcon from "../assets/images/play.png";
import { useEffect, useState } from "react";

const Video = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const video = document.getElementsByTagName("video");

  useEffect(() => {
    if (isClicked) {
      video[0].play();
    }
  }, [isClicked, video]);

  return (
    <div id="video">
      <div>
        {!isClicked && (
          <div className="relative z-50">
            <img
              src={PlayIcon}
              className="absolute left-0 right-0 mx-auto mt-96 cursor-pointer animate-fade-in-right "
              onClick={() => setIsClicked(!isClicked)}
            />
            <div className="absolute left-[115px] right-0 top-[313px] animate-fade-in-right w-[619px]">
              <h1 className="text-red font-bebasNeue uppercase text-[108px] opacity-70">
                Our newest video
              </h1>
              <p className="text-[17px] font-raleway leading-[34px] max-w-[612px] text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget
                risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit
                amet ultrices turpis vestibulum at.
              </p>
            </div>
          </div>
        )}
      </div>
      <video
        autoPlay
        loop
        muted={!isClicked}
        controls={isClicked}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
        onClick={() => setIsClicked(!isClicked)}
        onPause={() => setIsClicked(false)}
        className="grayscale"
      >
        <source src={VideoFile} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
