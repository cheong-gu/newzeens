import React from "react";
import { Label } from "./styles/TextInput.styles";
import styled from "@emotion/styled";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 80px;

  padding: 12px 16px;
  border-radius: 6px;
  background-color: #f9faff;

  font-size: 16px;
  font-weight: 400;
  resize: none;

  ::placeholder {
    color: #b3bbd3;
  }
`;

const TextArea = ({ name, label, value, onChange }: TextInputProps) => {
  return (
    <TextAreaWrapper>
      <Label>{label}</Label>
      <StyledTextArea
        name={name}
        value={value}
        onChange={onChange}
        placeholder="내용을 입력해주세요."
      />
    </TextAreaWrapper>
  );
};
export default React.memo(TextArea);
