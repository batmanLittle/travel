import "./Main.css";
import Hero from "../Hero/Hero";
import Travel from "../Travel/Travel";
import Featured from "../Featured/Featured";
import FeaturedVideos from "../FeaturedVideos/FeaturedVideos";
import Newsletter from "../Newsletter/Newsletter";
import Inspirations from "../Inspirations/Inspirations";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main className="main">
      <Hero />
      <Travel />
      <Featured />
      <FeaturedVideos />
      <Newsletter />
      <Inspirations />
      <Footer />
    </main>
  );
}

export default Main;
