import styled from "@emotion/styled";

export const DivStyle = styled.div`
  padding: 0 40px;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    color: var(--text_gray90);
    font-size: 19px;
    font-weight: 650;
    cursor: pointer;
  }
`;

export const BtnStyle = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;

  background: linear-gradient(to right, #3454f5, #a93cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  /* :hover {
    background-color: #565d71;
  } */
  span {
    text-align: center;
    margin-left: 4px;
  }
`;
