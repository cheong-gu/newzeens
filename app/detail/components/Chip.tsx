"use client";

import styled from "@emotion/styled";
import React from "react";

const StyledChip = styled.div<ChipStyledProps>`
  padding: 9px 12px;
  margin-right: 12px;
  border-radius: 10px;
  background-color: #f0f3fd;

  font-size: 15px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#2141E5" : "#39425a")};
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
