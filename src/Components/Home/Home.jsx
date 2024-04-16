import { Helmet } from "react-helmet-async";
import Cards from "../Cards/Cards";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>House | Home</title>
      </Helmet>
      <Slider></Slider>
     <Cards></Cards>
    </div>
  );
};

export default Home;
