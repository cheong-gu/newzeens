import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 360px;
  height: fit-content;
`;

export const Topline = styled.div`
  width: max-content;
  margin: 20px auto;
  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const FilterStyle = styled.div`
  /* min-width: auto; */
  margin: 20px 10px;
  .rowStyle {
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
      width: 600px;
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

  /* ${mediaQuery.sm} {
    display: flex;
    flex-direction: column;
    .title {
      display: none;
    }
    .content {
      #all {
        display: inherit;
      }
    }
  }

  #all {
    display: none;
  } */
`;
