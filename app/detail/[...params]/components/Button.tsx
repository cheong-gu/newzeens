"use client";

import styled from "@emotion/styled";
import React from "react";
import { mediaQuery } from "../../../breakpoints";

interface ButtonStyleProps {
  styleType: "solid" | "outlined";
}

interface ButtonProps extends ButtonStyleProps {
  label: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 68px;

  background: ${({ styleType }) =>
    styleType === "solid" ? "#22293c" : "#fff"};
  border: ${({ styleType }) =>
    styleType === "solid" ? "0px" : "1px solid #22293c"};
  border-radius: 10px;

  font-size: 20px;
  font-weight: 600;
  color: ${({ styleType }) => (styleType === "solid" ? "#fff" : "#22293c")};

  cursor: pointer;

  :hover {
    background: ${({ styleType }) =>
      styleType === "solid" ? "#2141E5" : "#F0F3FD"};
  }

  ${mediaQuery.md} {
    height: 52px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    ${({ styleType }) =>
      styleType === "outlined" ? `width: 176px;` : `width: 100%;`}
  }

  ${mediaQuery.sm} {
    height: 44px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    ${({ styleType }) =>
      styleType === "outlined" ? `width: 104px;` : `width: 100%;`}
  }
`;

const Button = ({ styleType, onClick, label }: ButtonProps) => {
  return (
    <StyledButton type="button" onClick={onClick} styleType={styleType}>
      {label}
    </StyledButton>
  );
};

export default Button;
