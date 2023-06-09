import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { NewsLetter } from "./newsLetter";
import { TotalDiv } from "./styles/NewsLetters.styles";
import { OutLine } from "./styles/NewsLetters.styles";

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
  const [list, setList] = useState<ListProps[] | null>(null);
  const [totalLength, setTotalLength] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const handleBottomReached = useCallback(() => {
    setPage((prev) => {
      if (prev < Math.floor(totalLength / 20) + 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  }, [totalLength]);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (windowHeight + scrollTop >= fullHeight) {
      handleBottomReached();
    }
  }, [handleBottomReached]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, totalLength]);

  const fetchData = useCallback(async () => {
    let url = "http://localhost:8080/newsLetter?";
    const params = [];

    if (field != "") params.push(`field=${field}`);
    if (keywords.length != 0) params.push(`keywords=${keywords.join(",")}`);
    if (deliveryPeriod != "") params.push(`deliveryPeriod=${deliveryPeriod}`);
    if (subscriptionFee != "")
      params.push(`subscriptionFee=${subscriptionFee}`);
    params.push(`page=${page}`);

    url += params.join("&");

    console.log(url);
    const data = await fetch(url).then((res) => res.json());
    console.log(data);
    const list = data.data;
    const totalLength = data.totalLength;
    setTotalLength(totalLength);

    setList((prev) => [...(prev ?? []), ...list]);
  }, [deliveryPeriod, field, keywords, page, subscriptionFee]);

  useEffect(() => {
    fetchData();
  }, [field, keywords, deliveryPeriod, subscriptionFee, page, fetchData]);

  return (
    <div>
      <TotalDiv>
        추천 뉴스레터 <span>{totalLength}</span>
      </TotalDiv>

      <OutLine>
        {list !== null
          ? list.map((el, idx) => <NewsLetter key={idx} list={el} />)
          : undefined}
      </OutLine>
    </div>
  );
}
