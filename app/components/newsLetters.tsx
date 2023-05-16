import styled from "@emotion/styled";
import { Key, useEffect, useState } from "react";
import { NewsLetter } from "./newsLetter";

export interface ListProps {
  newsletterName: string;
  publisher: string;
  introduction: string;
  subscriptionFee: string;
  field: string;
  keywords: [type: string, name: string];
  deliveryPeriod: string;
  previousIssueLink: string;
  subscribeLink: string;
  mainImage: string;
}

interface MyComponentProps {
  field: string;
  keywords: string[];
  deliveryPeriod: string;
  subscriptionFee: string;
}

export default function NewsLetters({
  field,
  keywords,
  deliveryPeriod,
  subscriptionFee,
}: MyComponentProps) {
  const OutLine = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(470px 470px 470px); */

    .grid {
      margin: 10px;
      .title {
      }
    }
  `;

  const TotalDiv = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin: 30px auto;
    text-align: center;

    span {
      color: var(--primary);
    }
  `;

  const [list, setList] = useState<ListProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:8080/newsLetter?";
      const params = [];

      if (field != "") params.push(`field=${field}`);
      if (keywords.length != 0) params.push(`keywords=${keywords.join(",")}`);
      if (deliveryPeriod != "") params.push(`deliveryPeriod=${deliveryPeriod}`);
      if (subscriptionFee != "")
        params.push(`subscriptionFee=${subscriptionFee}`);
      url += params.join("&");

      console.log(url);
      const data = await fetch(url).then((res) => res.json());
      console.log(data);
      setList(data);
    };
    fetchData();
  }, [field, keywords, deliveryPeriod, subscriptionFee]);

  return (
    <div>
      <TotalDiv>
        추천 뉴스레터 <span>{list?.length}</span>
      </TotalDiv>

      <OutLine>
        {list !== null
          ? list.map((el, idx) => <NewsLetter key={idx} list={el} />)
          : undefined}
        {/* <NewsLetters list={list} /> */}
      </OutLine>
    </div>
  );
}
