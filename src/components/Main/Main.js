import "./Main.css";
import Hero from "../Hero/Hero";
import Travel from "../Travel/Travel";
import Featured from "../Featured/Featured";
import FeaturedVideos from "../FeaturedVideos/FeaturedVideos";

function Main() {
  return (
    <main className="main">
      <Hero />
      <Travel />
      <Featured />
      <FeaturedVideos />
    </main>
  );
}

export default Main;
