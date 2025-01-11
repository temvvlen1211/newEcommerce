import Description from "../components/about/Description";
import Meet from "../components/about/Meet";
import MenOnly from "../components/about/menOnly";
import OurClient from "../components/about/OurClient";
import OurWorks from "../components/about/OurWorks";
import Provide from "../components/about/Provide";
import Transform from "../components/about/Transform";

function About() {
  return (
    <>
      <MenOnly />
      <Description />
      <Meet />
      <OurWorks />
      <Provide />
      <OurClient />
      <Transform />
    </>
  );
}
export default About;
