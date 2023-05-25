import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const OutLine = styled.div`
  .grid {
    position: relative;
    ul {
      position: relative;
      width: 152px;
      display: flex;
      align-items: center;
      flex-direction: row;
      overflow: auto;

      li {
        width: max-content;
        font-size: 12px;
        color: var(--primary);
        border: 1px solid white;
        border-radius: 4px;
        background-color: var(--text_gray20);
        padding: 8px;
        margin: 10px 0;
        /* margin-right: 4px; */
        cursor: pointer;

        ${mediaQuery.xs} {
          padding: 6px 8px;
        }

        :hover {
          color: var(--primary);
          background-color: var(--text_gray30);
        }
      }
    }

    .title {
      position: relative;
      font-size: 18px;
      margin-right: 4px;
    }

    .publisher {
      position: relative;

      font-size: 14px;
      color: var(--text_gray60);
    }

    .introduction {
      position: relative;

      margin-top: 8px;
      font-size: 16px;
      color: var(--text_gray80);
    }
  }

  ${mediaQuery.xs} {
  }
`;

export const ImageStyle = styled.div`
  position: relative;
  width: 319px !important;
  height: 319px !important;

  @keyframes loop {
    0% {
      top: 0px;
    }

    100% {
      top: -8px;
    }
  }

  .image {
    position: relative;
    border-radius: 10px;

    :hover {
      animation: loop 0.5s forwards;
      /* transform */
    }
  }
  & img {
    object-fit: cover;
  }

  ${mediaQuery.xs} {
    width: 152px !important;
    height: 152px !important;
    & img {
      object-fit: cover;
    }
  }
`;
