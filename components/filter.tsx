import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { Container, RowStyle } from "./styles/filter.styles";
import Image from "next/image";

interface MyComponentProps {
  field: string;
  keywords: string[];
  deliveryPeriod: string;
  subscriptionFee: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  setDeliveryPeriod: React.Dispatch<React.SetStateAction<string>>;
  setSubscriptionFee: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({
  field,
  keywords,
  deliveryPeriod,
  subscriptionFee,
  setField,
  setKeywords,
  setDeliveryPeriod,
  setSubscriptionFee,
}: MyComponentProps) {
  const listRef = useRef<HTMLLIElement>(null);

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

  const ClickField = (event: MouseEvent<HTMLElement>) => {
    const newText: string = event.currentTarget.innerText;
    setField(newText == field ? "" : newText);
  };

  const ClickKeywords = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;

    const copy = [...keywords];

    if (keywords.includes(data)) {
      const result = copy.filter((el) => el !== data);
      setKeywords(result);
    } else {
      setKeywords([...copy, data]);
    }
  };

  const ClickDeliveryPeriod = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;

    setDeliveryPeriod(data == deliveryPeriod ? "" : data);
  };

  const ClickSubscriptionFee = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;

    setSubscriptionFee(data == subscriptionFee ? "" : data);
  };

  const ClickReset = () => {
    setField("");
    setKeywords([]);
    setDeliveryPeriod("");
    setSubscriptionFee("");
  };

  return (
    <Container>
      <div className="reset" onClick={ClickReset}>
        <p>필터 초기화</p>
        <Image src="/reset.svg" alt="reset" width={14} height={14}></Image>
      </div>
      <RowStyle>
        <div className="title">
          <p>분야</p>
        </div>
        <div className="content">
          <ul>
            {arrField.map((el: string, idx: number) => (
              <li
                key={idx}
                className={field === el ? "filter_active" : "filter"}
                ref={listRef}
                onClick={ClickField}
              >
                <a>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>키워드</p>
        </div>
        <div className="content">
          <ul>
            {arrKeyword.map((el: string, idx: number) => (
              <li
                key={idx}
                className={
                  keywords.some((sel: string) => sel === el)
                    ? "filter_active"
                    : "filter"
                }
                ref={listRef}
                onClick={ClickKeywords}
              >
                <a>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>발송 주기</p>
        </div>
        <div className="content">
          <ul>
            {arrPeriod.map((el: string, idx: number) => (
              <li
                key={idx}
                className={deliveryPeriod === el ? "filter_active" : "filter"}
                ref={listRef}
                onClick={ClickDeliveryPeriod}
              >
                <a>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>구독료</p>
        </div>
        <div className="content">
          <ul>
            {arrFee.map((el: string, idx: number) => (
              <li
                key={idx}
                className={subscriptionFee === el ? "filter_active" : "filter"}
                ref={listRef}
                onClick={ClickSubscriptionFee}
              >
                <a>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </RowStyle>
    </Container>
  );
}
