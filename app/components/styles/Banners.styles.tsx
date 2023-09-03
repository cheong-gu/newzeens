import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  .swiper-pagination {
    display: none;
  }
  ${mediaQuery.sm} {
    .swiper-pagination {
      display: inherit;
    }
    .swiper-button-prev {
      display: none;
    }
    .swiper-button-next {
      display: none;
    }
  }
`;

export const BannerStyle = styled.div`
  position: relative !important;
  min-width: 100% !important;
  min-height: 200px !important;
  & img {
    object-fit: cover;
    filter: brightness(100%);
  }

  .bannerContainer {
    display: flex;
    justify-content: space-between;
    margin: 0 13.5%;
    ${mediaQuery.sm} {
      flex-direction: column;
      align-items: center;
    }
    .bn_image {
      margin: 20px;
      ${mediaQuery.sm} {
        display: none;
      }
    }
    .bn_imageM {
      display: none;
      ${mediaQuery.sm} {
        display: inherit;
      }
    }
  }
`;

export const Writter = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 70px;
  cursor: pointer;

  ${mediaQuery.sm} {
    top: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;

    ${mediaQuery.sm} {
      font-size: 18px;
      margin-bottom: 8px;
      text-align: center;
    }
  }
  span {
    font-size: 16px;
    font-weight: 500;
    color: var(--text_gray40);

    ${mediaQuery.sm} {
      font-size: 14px;
      text-align: center;
    }
  }

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
