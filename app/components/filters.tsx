import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Container, FilterStyle } from "./styles/Filters.styles";
import Image from "next/image";
import Filter from "@/components/filter";
import { Modal } from "./modal";
import { ModalContents } from "./modalContents";
import { TotalDiv } from "./styles/NewsLetters.styles";

export interface MyComponentProps {
  field: string;
  keywords: string[];
  selectedField: string[];
  deliveryPeriod: string;
  subscriptionFee: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedField: React.Dispatch<React.SetStateAction<string[]>>;
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

export const arrField: string[] = [
  "라이프스타일",
  "IT",
  "인문/저널리즘",
  "트렌드",
  "경제/시사/정치",
  "마케팅/브랜딩",
  "디자인",
];

export const arrKeyword: string[] = [
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
export const arrPeriod: string[] = [
  "매일",
  "주 1회",
  "주 2회 이상",
  "월 1회",
  "월 2회 이상",
  "무작위",
];
export const arrFee: string[] = ["무료", "유료"];

export default function Filters({
  field,
  keywords,
  deliveryPeriod,
  subscriptionFee,
  selectedField,
  showModal,
  setShowModal,
  setField,
  setSelectedField,
  setKeywords,
  setDeliveryPeriod,
  setSubscriptionFee,
}: MyComponentProps) {
  const listRef = useRef<HTMLLIElement>(null);
  const [page, setPage] = useState<number>(1);
  const [totalLength, setTotalLength] = useState<number>(0);

  useEffect(() => {
    // 실행할 로직
    console.log("Selected Field array: ", selectedField);
  }, [selectedField]);

  const onclickAll = (event: MouseEvent<HTMLElement>) => {
    const text: string = event.currentTarget.innerText;
    if (arrField.includes(text)) {
      clickField(event);
    } else if (arrKeyword.includes(text)) {
      clickKeywords(event);
    } else if (arrPeriod.includes(text)) {
      clickDeliveryPeriod(event);
    } else if (arrFee.includes(text)) {
      clickSubscriptionFee(event);
    }
  };

  const clickField = (event: MouseEvent<HTMLElement>) => {
    const newText: string = event.currentTarget.innerText;

    if (newText === "전체") {
      clickReset();
    } else {
      setField(newText == field ? "" : newText);
    }
  };

  const clickKeywords = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;

    const copy = [...keywords];

    console.log(field);
    if (keywords.includes(data)) {
      const result = copy.filter((el) => el !== data);
      setKeywords(result);
    } else {
      setKeywords([...copy, data]);
    }
  };

  const clickDeliveryPeriod = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;
    setDeliveryPeriod(data == deliveryPeriod ? "" : data);
  };

  const clickSubscriptionFee = (event: MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.innerText;
    setSubscriptionFee(data == subscriptionFee ? "" : data);
  };

  const clickReset = () => {
    setField("");
    setKeywords([]);
    setDeliveryPeriod("");
    setSubscriptionFee("");
  };

  const openModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const clickModalBtn = () => {
    openModal();
  };

  const fetchData = useCallback(async () => {
    let url = "https://newzeens.store/newsLetter?";
    const params = [];

    if (field != "") params.push(`field=${field}`);
    if (keywords.length != 0) params.push(`keywords=${keywords.join(",")}`);
    if (deliveryPeriod != "") params.push(`deliveryPeriod=${deliveryPeriod}`);
    if (subscriptionFee != "")
      params.push(`subscriptionFee=${subscriptionFee}`);
    params.push(`page=${page}`);

    url += params.join("&");
    const data = await fetch(url).then((res) => res.json());
    const totalLength = data.totalLength;
    setTotalLength(totalLength);
  }, [deliveryPeriod, field, keywords, page, subscriptionFee]);

  useEffect(() => {
    fetchData();
  }, [fetchData, totalLength]);
  return (
    <Container>
      <TotalDiv>
        <div className="filterTotal">
          추천 뉴스레터 <span>{totalLength}</span>
        </div>
      </TotalDiv>
      <div className="reset" onClick={clickReset}>
        <p>필터 초기화</p>
        <Image src="/reset.svg" alt="reset" width={14} height={14}></Image>
      </div>
      <FilterStyle>
        <div className="rowStyle">
          <div className="title"></div>
          <div className="content">
            <ul id="selectedField">
              <Filter
                id="all"
                el="전체"
                className={
                  [
                    ...arrField.filter((el) => el === field),
                    ...arrKeyword.filter((el) => keywords.includes(el)),
                    ...arrPeriod.filter((el) => el === deliveryPeriod),
                    ...arrFee.filter((el) => el === subscriptionFee),
                  ].length === 0
                    ? "filter_active"
                    : "filter"
                }
                ref={listRef}
                onClick={clickField}
              ></Filter>
              {[
                ...arrField.filter((el) => el === field),
                ...arrKeyword.filter((el) => keywords.includes(el)),
                ...arrPeriod.filter((el) => el === deliveryPeriod),
                ...arrFee.filter((el) => el === subscriptionFee),
              ].length === 0 ? (
                <div className="rowStyle">
                  <div className="title">
                    <p>분야</p>
                  </div>
                  <div className="content">
                    <ul id="mobileField">
                      {arrField.map((el: string, idx: number) => (
                        <Filter
                          id={el}
                          el={el}
                          key={idx}
                          className={field === el ? "filter_active" : "filter"}
                          ref={listRef}
                          onClick={clickField}
                        ></Filter>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                [
                  ...arrField.filter((el) => el === field),
                  ...arrKeyword.filter((el) => keywords.includes(el)),
                  ...arrPeriod.filter((el) => el === deliveryPeriod),
                  ...arrFee.filter((el) => el === subscriptionFee),
                ].map((el: string, idx: number) => (
                  <Filter
                    id={el}
                    el={el}
                    key={idx}
                    className={"filter_active"}
                    ref={listRef}
                    onClick={onclickAll}
                  ></Filter>
                ))
              )}
              <Image
                className="modalBtn"
                src="./modal.svg"
                alt="modal"
                width={36}
                height={36}
                onClick={clickModalBtn}
              />
            </ul>
          </div>
        </div>
        <div className="rowStyle">
          <div className="title">
            <p>분야</p>
          </div>
          <div className="content">
            <ul id="field">
              {arrField.map((el: string, idx: number) => (
                <Filter
                  id={el}
                  el={el}
                  key={idx}
                  className={field === el ? "filter_active" : "filter"}
                  ref={listRef}
                  onClick={clickField}
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
                  onClick={clickKeywords}
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
                  onClick={clickDeliveryPeriod}
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
                  onClick={clickSubscriptionFee}
                ></Filter>
              ))}
            </ul>
          </div>
        </div>
      </FilterStyle>
      {showModal && (
        <Modal backDrop={closeModal}>
          {" "}
          <ModalContents
            field={field}
            keywords={keywords}
            deliveryPeriod={deliveryPeriod}
            subscriptionFee={subscriptionFee}
            clickField={clickField}
            clickKeywords={clickKeywords}
            clickDeliveryPeriod={clickDeliveryPeriod}
            clickSubscriptionFee={clickSubscriptionFee}
            clickReset={clickReset}
            closeModal={closeModal}
            onClick={function (
              event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Modal>
      )}
    </Container>
  );
}
