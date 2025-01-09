import Blog from "../components/home/Blog";
import Carousel from "../components/home/Carousel";
import Hours from "../components/home/Hours";
import Professional from "../components/home/Professional";
import Services from "../components/home/Services";

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
