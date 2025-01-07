import Blog from "../components/Blog";
import Carousel from "../components/carousel";
import Hours from "../components/Hours";
import Professional from "../components/Professional";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Carousel />
      <Professional />
      <Services />
      <Hours />
      <Blog />
    </>
  );
}
export default Home;
