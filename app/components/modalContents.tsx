import Filter from "@/components/filter";
import { arrFee, arrField, arrKeyword, arrPeriod } from "./filters";
import { MouseEvent, useRef } from "react";
import { Container, FilterStyle, Topline } from "./styles/ModalContents.styles";
import Image from "next/image";

export interface ModalProps {
  field: string;
  keywords: string[];
  deliveryPeriod: string;
  subscriptionFee: string;
  clickField: (event: MouseEvent<HTMLElement>) => void;
  clickKeywords: (event: MouseEvent<HTMLElement>) => void;
  clickDeliveryPeriod: (event: MouseEvent<HTMLElement>) => void;
  clickSubscriptionFee: (event: MouseEvent<HTMLElement>) => void;
  closeModal: () => void;
  clickReset: () => void;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

export const ModalContents = ({
  field,
  keywords,
  deliveryPeriod,
  subscriptionFee,
  clickField,
  clickKeywords,
  clickDeliveryPeriod,
  clickSubscriptionFee,
  closeModal,
  clickReset,
}: ModalProps) => {
  const listRef = useRef<HTMLLIElement>(null);
  return (
    <Container>
      <Topline>
        <p>전체 필터</p>
        <Image
          className="close"
          src="/close.svg"
          alt="close"
          width={24}
          height={24}
          onClick={closeModal}
        />
      </Topline>
      <FilterStyle>
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
      <div id="reset" onClick={clickReset}>
        <div>
          <span>필터 초기화</span>
          <Image src="/reset.svg" alt="reset" width={14} height={14}></Image>
        </div>
      </div>
    </Container>
  );
};
