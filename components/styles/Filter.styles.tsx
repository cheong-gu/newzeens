import styled from "@emotion/styled";

export const FilterLi = styled.li`
  &.filter {
    margin: 0 4px;
    color: var(--text_gray80);
    background-color: var(--text_gray20);
    padding: 12px;
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
    margin: 0 4px;
    color: var(--primary);
    background-color: var(--white);
    padding: 12px;
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
`;
