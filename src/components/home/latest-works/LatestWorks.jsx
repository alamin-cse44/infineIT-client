// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import latestWork from "../../../assets/images/latestWork.svg";
import slider1 from "../../../assets/images/slider1.svg";
import slider2 from "../../../assets/images/slider2.svg";
import slider3 from "../../../assets/images/slider3.svg";

import Headings from "../../../common/Headings";

import './LatestWorks.scss';

const LatestWorks = () => {
  return (
    <div className="mt-[71px] mx-5">
      <Headings
        heading="SOME OF OUR LATEST WORKS"
        blurHeading="SOME OF OUR LATEST WORKS"
      />
      <div className="hidden display-img"><img src={latestWork} alt="" /></div>
      <div className="display-slide">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-20"
        >
          <SwiperSlide
            style={
              {
                // height: "550px",
                // bgcolor: "#202327",
                // display: "flex",
                // justifyContent: "center",
              }
            }
          >
            <img src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={
              {
                // height: "550px",
                // bgcolor: "#202327",
                // display: "flex",
                // justifyContent: "center",
              }
            }
          >
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={
              {
                // height: "550px",
                // bgcolor: "#202327",
                // display: "flex",
                // justifyContent: "center",
              }
            }
          >
            <img src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={
              {
                // height: "550px",
                // bgcolor: "#202327",
                // display: "flex",
                // justifyContent: "center",
              }
            }
          >
            <img src={slider1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestWorks;
