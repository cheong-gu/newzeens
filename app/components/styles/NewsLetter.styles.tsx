import styled from "@emotion/styled";

export const OutLine = styled.div`
  .grid {
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;

      li {
        font-size: 12px;
        color: var(--primary);
        border: 1px solid white;
        border-radius: 4px;
        background-color: var(--text_gray20);
        padding: 8px;
        margin: 10px 0;
        margin-right: 4px;
        cursor: pointer;

        :hover {
          color: var(--primary);
          background-color: var(--text_gray30);
        }
      }
    }

    .title {
      font-size: 18px;
      margin-right: 4px;
    }

    .publisher {
      font-size: 14px;
      color: var(--text_gray60);
    }

    .introduction {
      margin-top: 8px;
      font-size: 16px;
      color: var(--text_gray80);
    }
  }
`;

export const ImageStyle = styled.div`
  /* background-color: red; */
  border-radius: 10px;
`;
