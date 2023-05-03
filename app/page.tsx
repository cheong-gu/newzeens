"use client";

import styled from "@emotion/styled";
import Banners from "./components/banners";
import Filter from "./components/filter";

export default function Home() {
  const ContainerStyle = styled.div``;

  const FilterStyle = styled.div``;
  return (
    <ContainerStyle>
      <Banners></Banners>
      <Filter></Filter>
    </ContainerStyle>
  );
}
