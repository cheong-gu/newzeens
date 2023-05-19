import styled from "@emotion/styled";

export const OutLine = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
`;

export const TotalDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1.875rem auto;
  text-align: center;

  span {
    color: var(--primary);
  }
`;
