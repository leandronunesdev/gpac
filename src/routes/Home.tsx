import Playlists from "../components/Playlists";
import Hero from "../components/Hero";
import Video from "../components/Video";
import About from "../components/About";
import Hire from "../components/Hire";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Video />
      <Playlists />
      <Hire />
    </>
  );
};

export default Home;
