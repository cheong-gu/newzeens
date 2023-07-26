"use client";

import styled from "@emotion/styled";
import React from "react";
import { mediaQuery } from "../../breakpoints";

const StyledChip = styled.div<ChipStyledProps>`
  height: 36px;
  padding: 9px 12px;
  margin-right: 12px;
  border-radius: 10px;
  background-color: #f0f3fd;

  margin-bottom: 12px;

  font-size: 15px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#2141E5" : "#39425a")};

  ${mediaQuery.md} {
    height: inherit;
    font-size: 13px;
    padding: 6px 8px;
    border-radius: 4px;
    margin-right: 8px;
    margin-bottom: 0px;
  }
`;

interface ChipStyledProps {
  active?: boolean;
}

interface ChipProps extends ChipStyledProps {
  label: string;
}

const Chip = ({ label, active }: ChipProps) => {
  return <StyledChip active={active}>{label}</StyledChip>;
};

export default Chip;
