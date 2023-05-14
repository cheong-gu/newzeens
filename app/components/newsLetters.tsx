import styled from "@emotion/styled";
import { Key, useEffect, useState } from "react";
import { NewsLetter } from "./newsLetter";

export interface ListProps {
  map(
    arg0: (el: ListProps | null, idx: Key | null | undefined) => JSX.Element
  ): import("react").ReactNode;
  newsletterName: string;
  publisher: string;
  introduction: string;
  subscriptionFee: string;
  keywords: {
    type: string;
    name: string;
  };
  deliveryPeriod: string;
  previousIssueLink: string;
  subscribeLink: string;
  mainImage: string;
}

export default function NewsLetters() {
  const OutLine = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);

    .grid {
      margin: 20px;
      .title {
      }
    }
  `;

  const TotalDiv = styled.div`
    margin: 30px auto;
    text-align: center;
  `;

  //   const ImageStyle = styled.div`
  //     width: 319px;
  //     height: 319px;
  //     background-color: red;
  //     border-radius: 10px;
  //   `;

  //   const BtnStyle = styled.button`
  //     font-size: 12px;
  //     margin: 10px 0;
  //   `;

  const [list, setList] = useState<ListProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/newsLetter");
      setList(await data.json());
    };
    fetchData();
  }, []);
  return (
    <div>
      <TotalDiv>추천 뉴스레터</TotalDiv>

      <OutLine>
        {list !== null
          ? list.map((el: ListProps | null, idx: Key | null | undefined) => (
              <NewsLetter key={idx} list={el} />
            ))
          : undefined}
        {/* <NewsLetters list={list} /> */}
      </OutLine>
    </div>
  );
}
