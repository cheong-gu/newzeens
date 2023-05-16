import styled from "@emotion/styled";
import Image from "next/image";

export const BannerStyle = styled.div`
  position: relative !important;
  min-width: 100% !important;
  height: 200px !important;
  object-fit: cover;
  top: -9px;

  .banner {
    position: absolute;
  }

  .hello {
    position: relative;
    z-index: 1;
  }

  .bye {
    margin: 0 auto;
    p {
      position: relative;
      top: 9px;
      z-index: 1;
      color: white;
    }
  }
`;
const Banners = () => {
  return (
    <BannerStyle>
      {/* <Image
        className="hello"
        src={"left1.svg"}
        alt="left"
        width={38}
        height={38}
      /> */}

      <Image
        className="banner"
        src={"/banner.svg"}
        alt="banner"
        // width={1512}
        // height={200}
        fill
      />

      <div className="bye">
        <p>내게 꼭 맞는 뉴스레터를 발견해 보세요</p>
      </div>
      {/* <Image
        className="hello"
        src={"right1.svg"}
        alt="left"
        width={38}
        height={38}
      /> */}
    </BannerStyle>
  );
};

export default Banners;
