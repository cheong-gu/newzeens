"use client";

import styled from "@emotion/styled";
import Banners from "./components/banners";
import Filters from "./components/filters";
import NewsLetters from "./components/newsLetters";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Home() {
  const ContainerStyle = styled.div``;

  const [field, setField] = useState<string>("");
  const [keywords, setKeywords] = useState<Array<string>>([]);
  const [deliveryPeriod, setDeliveryPeriod] = useState<string>("");
  const [subscriptionFee, setSubscriptionFee] = useState<string>("");

  const arrField: string[] = [
    "마케팅/브랜드",
    "IT/개발",
    "디자인/문화",
    "커리어/성장",
    "경제/주식/부동산",
    "라이프/취미/건강",
    "인문/사회",
    "시사/정치",
  ];
  const arrKeyword: string[] = [
    "마케터",
    "IT 종사자",
    "디자이너",
    "누구나",
    "인사이트",
    "일잘러",
    "예술",
    "취미",
    "투자",
  ];
  const arrPeriod: string[] = [
    "매일",
    "주 1회",
    "주 2회 이상",
    "월 1회",
    "주기 없음",
  ];
  const arrFee: string[] = ["무료", "유료"];

  const FilterStyle = styled.div``;
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
