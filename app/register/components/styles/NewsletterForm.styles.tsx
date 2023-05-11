import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;

  max-width: 1094px;
  width: 100%;

  padding: 76px 52px;
  background-color: #ffffff;

  border: 1px solid #dfe4f5;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.9);
`;

const ContainerHeader = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 52px;
`;

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
