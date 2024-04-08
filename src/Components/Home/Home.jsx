import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const Home = () => {
  return (
    <div className="container mx-auto">

      <Swiper 
      navigation={true} modules={[Navigation]} 
      loop={true}
      
      >
        <SwiperSlide><div className="slide slide1">
        <h1>Slide 1</h1>
      </div></SwiperSlide>
        <SwiperSlide><div className="slide slide2">
        <h1>Slide 2</h1>
      </div></SwiperSlide>
        <SwiperSlide> <div className="slide slide3">
        <h1>Slide 3</h1>
      </div></SwiperSlide>
      </Swiper>
      {/* 
      
      */}
    </div>
  );
};

export default Home;
