import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const OutLine = styled.div`
  .grid {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 52px;
    overflow: visible;

    ${mediaQuery.sm} {
      margin-bottom: 32px;
    }
    ul {
      margin-top: 24px;
      margin-bottom: 16px;
      li {
        width: max-content;
        font-size: 12px;
        color: var(--primary);
        border: 1px solid white;
        border-radius: 4px;
        background-color: var(--text_gray20);
        padding: 8px;

        /* margin-right: 4px; */
        cursor: pointer;

        ${mediaQuery.sm} {
          padding: 6px 8px;
        }

        :hover {
          color: var(--primary);
          background-color: var(--text_gray30);
        }
      }
    }

    .titleDiv {
      display: flex;
      ${mediaQuery.sm} {
        flex-direction: column;
      }

      .title {
        line-height: 1;
        font-weight: 600;
        font-size: 18px;
        margin-right: 4px;
        /* margin-bottom: 16px; */
        color: var(--text_gray90);
      }

      .publisher {
        position: relative;

        font-size: 14px;
        color: var(--text_gray60);

        ${mediaQuery.sm} {
          margin-top: 4px;
        }
      }
    }

    .introduction {
      position: relative;
      max-width: 284px;
      max-height: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      margin: 8px 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      color: var(--text_gray80);

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    ${mediaQuery.sm} {
      max-width: calc(50vw - 20px);
      line-height: 140%;
      overflow: visible;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
`;

export const ImageStyle = styled.div`
  position: relative;
  width: 284px !important;
  height: 284px !important;

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
      z-index: 999;
      animation: loop 0.5s forwards;
      /* transform */
    }

    ${mediaQuery.sm} {
      border: 0.6px solid var(--text_gray40);
    }
  }
  & img {
    object-fit: cover;
  }

  ${mediaQuery.sm} {
    max-width: calc(50vw - 20px) !important;
    max-height: calc(50vw - 20px) !important;
    & img {
      object-fit: cover;
    }
  }
`;
