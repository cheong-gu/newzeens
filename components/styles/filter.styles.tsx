import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const FilterLi = styled.li`
  margin: 0 4px;
  padding: 8px 12px;
  &.filter {
    width: max-content;

    color: var(--text_gray80);
    background-color: var(--text_gray20);

    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: var(--text_gray30);
    }
    a {
      font-size: 15px;
    }
  }
  &.filter_active {
    color: var(--primary);
    background-color: var(--white);

    border: 1px solid var(--primary);
    border-radius: 10px;
    cursor: pointer;

    a {
      font-size: 15px;
    }
    &:hover {
      border: 1px solid var(--primary);
      color: var(--primary);
      background-color: var(--text_gray20);
    }
  }

  ${mediaQuery.xs} {
    width: max-content;
    height: 33px !important;
    display: flex;
    align-items: center;
  }
`;
