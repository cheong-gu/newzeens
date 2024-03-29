"use client";

import styled from "@emotion/styled";
import Banners from "./components/banners";
import Filters from "./components/filters";
import NewsLetters from "./components/newsLetters";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const ContainerStyle = styled.div``;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [field, setField] = useState<string>("");
  const [keywords, setKeywords] = useState<Array<string>>([]);
  const [deliveryPeriod, setDeliveryPeriod] = useState<string>("");
  const [subscriptionFee, setSubscriptionFee] = useState<string>("");
  const [selectedField, setSelectedField] = useState<Array<string>>([]);

  return (
    <ContainerStyle>
      <Header
        onClickLogo={() => {
          setField((prev) => "");
          setKeywords((prev) => []);
          setDeliveryPeriod((prev) => "");
          setSubscriptionFee((prev) => "");
          setSelectedField((prev) => []);
        }}
      />
      <Banners></Banners>
      <Filters
        showModal={showModal}
        setShowModal={setShowModal}
        field={field}
        selectedField={selectedField}
        keywords={keywords}
        deliveryPeriod={deliveryPeriod}
        subscriptionFee={subscriptionFee}
        setField={setField}
        setSelectedField={setSelectedField}
        setKeywords={setKeywords}
        setDeliveryPeriod={setDeliveryPeriod}
        setSubscriptionFee={setSubscriptionFee}
      ></Filters>
      <NewsLetters
        field={field}
        keywords={keywords}
        deliveryPeriod={deliveryPeriod}
        subscriptionFee={subscriptionFee}
      ></NewsLetters>
      <Footer />
    </ContainerStyle>
  );
}
