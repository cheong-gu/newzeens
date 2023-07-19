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
    filter: brightness(70%);
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
    font-weight: 600;
    margin-bottom: 12px;

    ${mediaQuery.sm} {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }
  span {
    font-size: 16px;
    font-weight: 500;
    color: var(--text_gray40);

    ${mediaQuery.sm} {
      font-size: 14px;
    }
  }

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
