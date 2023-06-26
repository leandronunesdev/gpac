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
      <Hire title="Want to hire us?" buttonType="page" />
    </>
  );
};

export default Home;
