import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  min-width: 124px;
  height: 40px;

  font-weight: 600;
  font-size: 16px;
  color: #22293c;
`;

export const SubLabel = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #b3bbd3;
`;

export const Required = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #2141e5;
  margin-left: 2px;
`;

export const StyledInput = styled.input<{ inputSize: "sm" | "md" | "lg" }>`
  width: ${({ inputSize }) =>
    inputSize === "sm" ? "195px" : inputSize === "md" ? "319px" : "100%"};
  height: 100%;

  padding: 12px 16px;
  border-radius: 6px;
  background-color: #f9faff;

  font-size: 16px;
  font-weight: 400;

  ::placeholder {
    color: #b3bbd3;
  }
`;
