import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const OutLine = styled.div`
  .grid {
    position: relative;
    display: flex;
    flex-direction: column;
    ul {
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
        font-size: 18px;
        margin-right: 4px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      margin: 8px 0;
      font-size: 16px;
      color: var(--text_gray80);

      ${mediaQuery.sm} {
        max-width: 152px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
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
    border: 1px solid var(--text_gray40);
    border-radius: 10px;

    :hover {
      animation: loop 0.5s forwards;
      /* transform */
    }
  }
  & img {
    object-fit: cover;
  }

  ${mediaQuery.sm} {
    max-width: 152px !important;
    max-height: 152px !important;
    & img {
      object-fit: cover;
    }
  }
`;
