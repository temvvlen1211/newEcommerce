import Blog from "../components/home/Blog";
import Carousel from "../components/home/Carousel";
import Hours from "../components/home/Hours";
import Professional from "../components/home/Professional";
import Service from "../components/home/Service";

function Home() {
  return (
    <>
      <Carousel />
      <Professional />
      <Service />
      <Hours />
      <Blog />
    </>
  );
}
export default Home;
