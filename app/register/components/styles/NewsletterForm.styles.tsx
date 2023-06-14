import styled from "@emotion/styled";

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  margin-top: 52px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 319px;
  height: 58px;

  background-color: #22293c;
  border-radius: 6px;

  font-size: 18px;
  font-weight: 600;
  color: #ffffff;

  cursor: pointer;

  :hover {
    background-color: #2141e5;
  }
`;

export const Divider = styled.div`
  margin-top: 40px;
`;

export const InputRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const InputColumnWrapper = styled.div`
  min-width: 468px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
