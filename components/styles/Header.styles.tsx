import styled from "@emotion/styled";

export const DivStyle = styled.div`
  padding: 0 20px;
  background-color: #22293b;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    height: 19px;
    color: #ffffff;
    font-size: 19px;
    font-weight: 650;
    cursor: pointer;
  }
`;

export const BtnStyle = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 38px;
  padding: 12px 16px;
  background-color: #39425a;
  cursor: pointer;

  :hover {
    background-color: #565d71;
  }
  span {
    text-align: center;
    margin-left: 4px;
    color: #ffffff;
  }
`;
