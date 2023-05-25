import Image from "next/image";
import { Navigation, A11y, Mousewheel, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BannerContainer, BannerStyle, Writter } from "./styles/Banners.styles";
import { mediaQuery } from "../breakpoints";

const Banners = () => {
  return (
    <BannerContainer>
      <Swiper
        modules={[Navigation, Mousewheel, Autoplay, A11y, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        mousewheel={true}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        //   autoplay={{ delay: 5000, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={
          {
            // when window width is >= 640px
            // 360: {
            //   width: 360,
            //   slidesPerView: 1,
            //   pagination: { clickable: true },
            // },
            // when window width is >= 768px
            // 768: {
            //   width: 768,
            //   slidesPerView: 2,
            // },
          }
        }
      >
        <SwiperSlide>
          <BannerStyle>
            <Image className="banner" src={"/banner.svg"} alt="banner" fill />
            <Writter>
              <p>내게 꼭 맞는 뉴스레터를 발견해 보세요</p>
              <span>매주 일요일 오전 12시 업데이트</span>
            </Writter>
          </BannerStyle>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
};

export default Banners;
