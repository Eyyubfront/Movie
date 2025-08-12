import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import action1 from "../../assets/home_actionfilm/action1.jpg";
import action2 from "../../assets/home_actionfilm/action2.jpg";
import action3 from "../../assets/home_actionfilm/action3.jpg";
import action4 from "../../assets/home_actionfilm/action4.jpg";
import action5 from "../../assets/home_actionfilm/action5.jpg";
import action6 from "../../assets/home_actionfilm/action6.jpg";
import action7 from "../../assets/home_actionfilm/action7.jpg";
import { Link } from "react-router-dom";
import Accardation from "../../components/Accardation/Accardation";



const Home = () => {
  const images = [action1, action2, action3, action4, action5,action6,action7];

  return (
    <>
      <div className="swiper_top">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Sekil ${index + 1}`}
                className="swiper_img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/explore">
          <button className="explore_button">Explore film</button>
        </Link>
      </div>
    <Accardation/>
    </>
  );
};

export default Home;
