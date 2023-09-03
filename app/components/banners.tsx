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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <BannerStyle>
            <Image className="banner" src={"/PC_1.png"} alt="banner" fill />
            <div className="bannerContainer">
              <Writter>
                <p>내게 맞는 뉴스레터를 발견해 보세요</p>
                <span>매주 일요일 오전 12시 업데이트</span>
              </Writter>
              <Image
                className="bn_image"
                src={"/NPC-0.png"}
                alt="bannerImage"
                width={160}
                height={160}
              />
              <Image
                className="bn_imageM"
                src={"/NM-0.png"}
                alt="bannerImage"
                width={52}
                height={52}
              />
            </div>
          </BannerStyle>
        </SwiperSlide>
        <SwiperSlide>
          <BannerStyle>
            <Image className="banner" src={"/PC_2.png"} alt="banner" fill />
            <div className="bannerContainer">
              <Writter>
                <p>이번 주말에 뭐하세요?</p>
                <span>맛집, 핫플, 전시 소식 등을 전해주는 트렌드 뉴스레터</span>
              </Writter>
              <Image
                className="bn_image"
                src={"/NPC-1.png"}
                alt="bannerImage"
                width={160}
                height={160}
              />
              <Image
                className="bn_imageM"
                src={"/NM-1.png"}
                alt="bannerImage"
                width={52}
                height={52}
              />
            </div>
          </BannerStyle>
        </SwiperSlide>
        <SwiperSlide>
          <BannerStyle>
            <Image className="banner" src={"/PC_3.png"} alt="banner" fill />
            <div className="bannerContainer">
              <Writter>
                <p>부자가 되고 싶으신가요?</p>
                <span>돈을 잘 벌고 잘 쓰는 방법을 알려주는 경제 뉴스레터</span>
              </Writter>
              <Image
                className="bn_image"
                src={"/NPC-2.png"}
                alt="bannerImage"
                width={160}
                height={160}
              />
              <Image
                className="bn_imageM"
                src={"/NM-2.png"}
                alt="bannerImage"
                width={52}
                height={52}
              />
            </div>
          </BannerStyle>
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
};

export default Banners;
