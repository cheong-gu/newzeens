"use client";

import styled from "@emotion/styled";
import Banners from "./components/banners";
import Filters from "./components/filters";
import NewsLetters from "./components/newsLetters";
import { useState } from "react";

export default function Home() {
  const ContainerStyle = styled.div``;

  const [field, setField] = useState<string>("");
  const [keywords, setKeywords] = useState<Array<string>>([]);
  const [deliveryPeriod, setDeliveryPeriod] = useState<string>("");
  const [subscriptionFee, setSubscriptionFee] = useState<string>("");

  return (
    <ContainerStyle>
      <Banners></Banners>
      <Filters
        field={field}
        keywords={keywords}
        deliveryPeriod={deliveryPeriod}
        subscriptionFee={subscriptionFee}
        setField={setField}
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
    </ContainerStyle>
  );
}
