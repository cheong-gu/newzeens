import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

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

    ${mediaQuery.xs} {
      font-size: 18px;
    }
  }
  span {
    font-size: 16px;
    color: var(--text_gray40);

    ${mediaQuery.xs} {
      font-size: 14px;
    }
  }
`;
