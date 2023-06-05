import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 25px 27px;
  .reset {
    color: var(--text_black);
    display: flex;
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
    P {
      margin-right: 4px;
      line-height: 1;
    }

    p:hover + Img {
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

  border-bottom: solid #e6e6e6 1px;

  ${mediaQuery.sm} {
    overflow: auto;
    margin: auto;
    .reset {
      display: none;
    }
    ::-webkit-scrollbar {
      display: none !important;
    }
  }
`;

export const FilterStyle = styled.div`
  margin: 20px 10px;
  .rowStyle {
    color: var(--text_black);
    display: flex;
    align-items: center;
    flex-direction: row;

    .title {
      min-width: 80px;
      font-weight: 650;
    }

    .content {
      ul {
        display: flex;
        margin: 10px 0;
        .modalBtn {
          display: none;
          position: absolute;
          right: 10px;
          cursor: pointer;
        }

        ${mediaQuery.sm} {
          .modalBtn {
            display: inherit;
          }
        }
      }
    }
  }

  ${mediaQuery.sm} {
    display: flex;
    .title {
      display: none;
    }
    .content {
      #all ,#selectedField{
        display: flex;
      }
      #field,
      #keyword,
      #period,
      #fee {
        display: none;
      }
    }
  }

  #selectedField{
    display: none;
  }

  #all {
    display: none;
  }
`;
