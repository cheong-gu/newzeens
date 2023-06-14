import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const OutLine = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  align-content: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(284px, 284px));
  grid-template-rows: auto;

  ${mediaQuery.md} {
    grid-gap: 10px;
    grid-template-columns: repeat(2, minmax(284px, 284px));
  }

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, minmax(152px, 152px));
  }
`;

export const TotalDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  span {
    color: var(--primary);
  }

  .filterTotal {
    display: none;
    ${mediaQuery.sm} {
      margin: 0 auto;
      margin-top: 20px;
      display: inherit;
    }
  }
  .newsTotal {
    margin: 1.875rem auto;
    ${mediaQuery.sm} {
      display: none;
    }
  }
`;
