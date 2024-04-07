"use client";

import Navbar from "@/components/navbar";
import Card from "@/components/card";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Scrollbar,
  EffectCreative,
  EffectFade,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="cardSwiperContainer">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={0}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect={"coverflow"}
          // navigation={true}
          // speed={1000}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          style={{ padding: "30px" }}
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
