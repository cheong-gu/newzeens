import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 25px 27px;
  .reset {
    color: var(--text_black);
    display: flex;
    cursor: pointer;
    width: fit-content;
    border-bottom: 1px solid var(--text_black);
    p {
      margin-right: 4px;
    }

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

    Img:hover {
      animation-name: lotate; /* lotate 라는 이름의 키프레임 애니메이션을 */
      animation-duration: 1.5s; /* 3초 동안 재생하며, */
      animation-iteration-count: infinite; /* 애니메이션을 무한 반복하고, */
      animation-timing-function: linear; /* 선형으로 재생합니다. */
    }
  }

  border-bottom: solid #e6e6e6 1px;
`;

export const RowStyle = styled.div`
  color: var(--text_black);
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  .title {
    width: 80px;
    font-weight: 650;
    font-size: 16px;
  }

  .content {
    ul {
      display: flex;
      .filter {
        margin: 0 4px;
        color: var(--text_gray80);
        background-color: var(--text_gray20);
        padding: 12px;
        border: 1px solid white;
        border-radius: 10px;

        :hover {
          background-color: var(--text_gray30);
        }
        a {
          font-size: 15px;
        }
      }
      .filter_active {
        margin: 0 4px;
        color: var(--primary);
        background-color: var(--white);
        padding: 12px;
        border: 1px solid var(--primary);
        border-radius: 10px;
        a {
          font-size: 15px;
        }
        :hover {
          border: 1px solid var(--primary);
          color: var(--primary);
          background-color: var(--text_gray20);
        }
      }
    }
  }
`;
