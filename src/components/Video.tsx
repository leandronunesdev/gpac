import VideoFile from "../assets/videos/video.mp4";
import PlayIcon from "../assets/images/play.png";
import { useState } from "react";

const Video = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div>
      <div className="bg-black/50 absolute h-[930px] w-full" />
      <div>
        {!isClicked && (
          <img
            src={PlayIcon}
            className="absolute left-0 right-0 mx-auto mt-96 cursor-pointer"
          />
        )}
      </div>

      <video
        width="100%"
        autoPlay
        loop
        muted={!isClicked}
        controls={isClicked}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
        onClick={() => setIsClicked(!isClicked)}
      >
        <source src={VideoFile} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
