import styled from "@emotion/styled";
import Image from "next/image";
import { Navigation, A11y, Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const BannerStyle = styled.div`
  position: relative !important;
  min-width: 100% !important;
  min-height: 200px !important;
  & img {
    object-fit: cover;
  }
`;

export const Writter = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 80px;
  text-align: center;
  p {
    font-size: 24px;
  }
  span {
    font-size: 16px;
    color: var(--text_gray40);
  }
`;

const Banners = () => {
  return (
    <Swiper
      modules={[Navigation, Mousewheel, Autoplay, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      mousewheel={true}
      navigation={true}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
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
  );
};

export default Banners;
