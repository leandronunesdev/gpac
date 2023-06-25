import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import PlayLists from "../components/PlayLists";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <Hero />
      <Video />
      <PlayLists />
      <Carousel />
    </>
  );
};

export default Home;
