import { mediaQuery } from "@/app/breakpoints";
import styled from "@emotion/styled";

export const OutLine = styled.div`
  margin: 0 10px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  ${mediaQuery.xs} {
    max-width: fit-content;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(10, 1fr); */
  }
`;

export const TotalDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1.875rem auto;
  text-align: center;

  span {
    color: var(--primary);
  }

  ${mediaQuery.xs} {
    width: max-content;
  }
`;
