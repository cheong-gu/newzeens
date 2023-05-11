import React from "react";
import {
  InputWrapper,
  Label,
  Required,
  StyledInput,
  SubLabel,
} from "../styles/TextInput.styles";

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  size: "sm" | "md" | "lg";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  subLabel?: string;
}

const TextInput = ({
  name,
  label,
  value,
  size,
  onChange,
  required,
  subLabel,
}: TextInputProps) => {
  return (
    <InputWrapper>
      <Label>
        {label}
        {subLabel && <SubLabel>&nbsp;{subLabel}</SubLabel>}
        {required && <Required>*</Required>}
      </Label>
      <StyledInput
        type="text"
        name={name}
        inputSize={size}
        value={value}
        onChange={onChange}
        placeholder="내용을 입력해주세요."
      />
    </InputWrapper>
  );
};

export default React.memo(TextInput);
