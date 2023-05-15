import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

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

  const Container = styled.div`
    margin: 25px 27px;
    .reset {
      text-decoration: underline;
    }

    border-bottom: solid #e6e6e6 1px;
  `;

  const RowStyle = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: row;

    .title {
      width: 80px;
      font-weight: 650;
      font-size: 16px;
    }
    ul {
      display: flex;
      li {
        margin: 0 4px;
        font-size: 15px;
        background-color: #eef1fa;
        padding: 12px;
        border-radius: 10px;
        a {
        }
      }
    }
  `;

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

    setDeliveryPeriod(data);
  };

  const ClickSubscriptionFee = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;

    setSubscriptionFee(event.currentTarget.innerText);
  };

  return (
    <Container>
      <p className="reset">필터 초기화</p>
      {keywords}
      <RowStyle>
        <div className="title">
          <p>분야</p>
        </div>
        <div>
          <ul>
            <li ref={listRef} onClick={ClickField}>
              <a>마케팅/트렌드</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>IT/개발</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>디자인/문화</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>커리어/성장</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>경제/주식/부동산</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>라이프/취미/건강</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>인문/사회</a>
            </li>
            <li ref={listRef} onClick={ClickField}>
              <a>시사/정치</a>
            </li>
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>키워드</p>
        </div>
        <div>
          <ul>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>마케터</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>IT 종사자</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>디자이너</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>누구나</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>인사이트</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>일잘러</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>예술</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>취미</a>
            </li>
            <li ref={listRef} onClick={ClickKeywords}>
              <a>투자</a>
            </li>
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>발송 주기</p>
        </div>
        <div>
          <ul>
            <li ref={listRef} onClick={ClickDeliveryPeriod}>
              <a>매일</a>
            </li>
            <li ref={listRef} onClick={ClickDeliveryPeriod}>
              <a>주 1회</a>
            </li>
            <li ref={listRef} onClick={ClickDeliveryPeriod}>
              <a>주 2회 이상</a>
            </li>
            <li ref={listRef} onClick={ClickDeliveryPeriod}>
              <a>월 1회</a>
            </li>
            <li ref={listRef} onClick={ClickDeliveryPeriod}>
              <a>주기 없음</a>
            </li>
          </ul>
        </div>
      </RowStyle>
      <RowStyle>
        <div className="title">
          <p>구독료</p>
        </div>
        <div>
          <ul>
            <li ref={listRef} onClick={ClickSubscriptionFee}>
              <a>무료</a>
            </li>
            <li ref={listRef} onClick={ClickSubscriptionFee}>
              <a>유료</a>
            </li>
          </ul>
        </div>
      </RowStyle>
    </Container>
  );
}
