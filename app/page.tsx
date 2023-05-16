"use client";

import styled from "@emotion/styled";
import Banners from "./components/banners";
import Filter from "../components/filter";
import NewsLetters from "./components/newsLetters";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Home() {
  const ContainerStyle = styled.div``;

  const [field, setField] = useState<string>("");
  const [keywords, setKeywords] = useState<Array<string>>([]);
  const [deliveryPeriod, setDeliveryPeriod] = useState<string>("");
  const [subscriptionFee, setSubscriptionFee] = useState<string>("");

  const FilterStyle = styled.div``;
  return (
    <ContainerStyle>
      <Banners></Banners>
      <Filter
        field={field}
        keywords={keywords}
        deliveryPeriod={deliveryPeriod}
        subscriptionFee={subscriptionFee}
        setField={setField}
        setKeywords={setKeywords}
        setDeliveryPeriod={setDeliveryPeriod}
        setSubscriptionFee={setSubscriptionFee}
      ></Filter>
      <NewsLetters
        field={field}
        keywords={keywords}
        deliveryPeriod={deliveryPeriod}
        subscriptionFee={subscriptionFee}
      ></NewsLetters>
    </ContainerStyle>
  );
}
