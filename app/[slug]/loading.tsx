"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "../../public/loading.json";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <Player autoplay loop src={loading} style={{ width: 144, height: 105 }} />
    </Container>
  );
};

export default Loading;
