"use client";

import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <Container>
      <h3>Error</h3>
      <p>{error?.message}</p>
    </Container>
  );
}
