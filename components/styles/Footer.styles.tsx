import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const FooterDiv = styled.div`
  /* position: relative;
  transform: translateY(-100%);
  background-color: black;
  height: 100px; */
  position: relative;
  bottom: 0;
  left: 0;
  height: 160px;
  width: 100%;
  padding-top: 40px;

  .innerDiv {
    position: relative;
    margin-left: 70px;
    /* margin-top: 70px; */
    display: flex;

    ${mediaQuery.sm} {
      flex-direction: column;
    }

    .title {
      color: var(--text_gray60);
      font-size: 19px;
      font-weight: 650;

      ${mediaQuery.sm} {
        margin-bottom: 10px;
      }
    }

    .content {
      color: var(--text_gray60);
      font-size: 13px;
      display: flex;
      flex-direction: column;
      margin-left: 230px;
      font-weight: 300;
      ${mediaQuery.sm} {
        margin-left: 0;
      }

      .span1 {
        margin-bottom: 8px;

        ${mediaQuery.md} {
          width: 210px;
        }
      }
      .span2 {
      }
    }
  }
`;
