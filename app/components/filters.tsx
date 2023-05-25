import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { Container, FilterStyle } from "./styles/Filters.styles";
import Image from "next/image";
import Filter from "@/components/filter";

export interface MyComponentProps {
  field: string;
  keywords: string[];
  deliveryPeriod: string;
  subscriptionFee: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  setDeliveryPeriod: React.Dispatch<React.SetStateAction<string>>;
  setSubscriptionFee: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterProps {
  id: string;
  el: string;
  field?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

export default function Filters({
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
  const [all, setAll] = useState<boolean>(false);

  const arrField: string[] = [
    "라이프스타일",
    "IT",
    "인문/저널리즘",
    "트렌드",
    "경제/시사/정치",
    "마케팅/브랜드",
    "디자인",
  ];

  const arrKeyword: string[] = [
    "마케터",
    "개발자",
    "디자이너",
    "누구나",
    "사례 및 업계소식",
    "투자/상식",
    "취미/취향",
    "일상",
    "믿을 수 있는 글",
    "발 빠른 정보",
  ];
  const arrPeriod: string[] = [
    "매일",
    "주 1회",
    "주 2회 이상",
    "월 1회",
    "월 2회 이상",
    "무작위",
  ];
  const arrFee: string[] = ["무료", "유료"];

  const ClickField = (event: MouseEvent<HTMLElement>) => {
    const newText: string = event.currentTarget.innerText;
    if (newText === "전체") {
      ClickReset();
      setAll(false);
    } else {
      setField(newText == field ? "" : newText);
      setAll(true);
    }
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
      <FilterStyle>
        <div className="rowStyle">
          <div className="title">
            <p>분야</p>
          </div>
          <div className="content">
            <ul id="field">
              <Filter
                id="all"
                el="전체"
                className={field ? "filter" : "filter_active"}
                ref={listRef}
                onClick={ClickField}
              ></Filter>
              {arrField.map((el: string, idx: number) => (
                <Filter
                  id={el}
                  el={el}
                  key={idx}
                  className={field === el ? "filter_active" : "filter"}
                  ref={listRef}
                  onClick={ClickField}
                ></Filter>
              ))}
            </ul>
          </div>
        </div>
        <div className="rowStyle">
          <div className="title">
            <p>키워드</p>
          </div>
          <div className="content">
            <ul id="keyword">
              {arrKeyword.map((el: string, idx: number) => (
                <Filter
                  id={el}
                  el={el}
                  key={idx}
                  className={
                    keywords.some((sel: string) => sel === el)
                      ? "filter_active"
                      : "filter"
                  }
                  ref={listRef}
                  onClick={ClickKeywords}
                ></Filter>
              ))}
            </ul>
          </div>
        </div>
        <div className="rowStyle">
          <div className="title">
            <p>발송 주기</p>
          </div>
          <div className="content">
            <ul id="period">
              {arrPeriod.map((el: string, idx: number) => (
                <Filter
                  id={el}
                  el={el}
                  key={idx}
                  className={deliveryPeriod === el ? "filter_active" : "filter"}
                  ref={listRef}
                  onClick={ClickDeliveryPeriod}
                ></Filter>
              ))}
            </ul>
          </div>
        </div>
        <div className="rowStyle">
          <div className="title">
            <p>구독료</p>
          </div>
          <div className="content">
            <ul id="fee">
              {arrFee.map((el: string, idx: number) => (
                <Filter
                  id={el}
                  el={el}
                  key={idx}
                  className={
                    subscriptionFee === el ? "filter_active" : "filter"
                  }
                  ref={listRef}
                  onClick={ClickSubscriptionFee}
                ></Filter>
              ))}
            </ul>
          </div>
        </div>
      </FilterStyle>
    </Container>
  );
}
