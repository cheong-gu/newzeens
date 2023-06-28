import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 360px;
  height: fit-content;

  #reset {
    margin: 20px;
    cursor: pointer;
    div {
      margin-left: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      color: var(--text_black);
      cursor: pointer;
      width: fit-content;
      border-bottom: 1px solid var(--text_black);

      @keyframes lotate {
        0% {
          transform: rotate(0deg);
        }

        50% {
          transform: rotate(180deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
      span {
        margin-right: 4px;
        line-height: 1;
      }

      span:hover + Img {
        animation-name: lotate; /* lotate 라는 이름의 키프레임 애니메이션을 */
        animation-duration: 1.5s; /* 1.5초 동안 재생하며, */
        animation-iteration-count: infinite; /* 애니메이션을 무한 반복하고, */
        animation-timing-function: linear; /* 선형으로 재생합니다. */
      }
      Img:hover {
        animation-name: lotate; /* lotate 라는 이름의 키프레임 애니메이션을 */
        animation-duration: 1.5s; /* 1.5초 동안 재생하며, */
        animation-iteration-count: infinite; /* 애니메이션을 무한 반복하고, */
        animation-timing-function: linear; /* 선형으로 재생합니다. */
      }
    }
  }
`;

export const Topline = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  margin: 20px auto;
  p {
    font-size: 16px;
    font-weight: 600;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 10px;
  }
`;

export const FilterStyle = styled.div`
  /* min-width: auto; */
  margin: 20px 10px;
  .rowStyle {
    min-width: 360px;
    margin: 10px 0;
    color: var(--text_black);
    display: flex;
    flex-direction: column;

    .title {
      min-width: 80px;
      font-weight: 650;
      display: flex;
      ${mediaQuery.sm} {
        font-size: 14px;
      }
    }

    .content {
      ul {
        margin: 10px 0;

        li {
          float: left;
          margin: 5px 5px;
          /* display: inline-block; */
          line-height: 1;
        }
      }
    }
  }
`;
