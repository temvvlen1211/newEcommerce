import Carousel from "../components/home/Carousel";
import Hours from "../components/home/Hours";
import OurBlog from "../components/home/OurBlog";
import Professional from "../components/home/Professional";
import Service from "../components/home/Service";

function Home() {
  return (
    <>
      <Carousel />
      <Professional />
      <Service />
      <Hours />
      <OurBlog />
    </>
  );
}
export default Home;
