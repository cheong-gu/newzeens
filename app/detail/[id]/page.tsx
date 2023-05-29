import React from "react";
import styles from "./styles.module.css";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";
import { NewsletterResponseType } from "../../register/newsletter.type";

const getFeaturedNewsletter = async (tag: string) => {
  const res = await fetch(`http://localhost:8080/newsLetter?field=${tag}`, {
    next: { revalidate: 0 },
  });
  if (!res) {
    throw new Error("[DetailPage/getFeaturedNewsletter] Something Wrong...");
  }
  const data: NewsletterResponseType[] = await res.json();
  return data;
};

interface DetailPageProps {
  searchParams: {
    info: string;
  };
}

const DetailPage = async ({ searchParams: { info } }: DetailPageProps) => {
  const parsedInfo = JSON.parse(
    decodeURIComponent(info)
  ) as NewsletterResponseType;
  const featuredList = await getFeaturedNewsletter(parsedInfo.field);
  return (
    <div className={styles.wrapper}>
      <NewsLetterInfo info={parsedInfo} />
      <div className={styles.divider} />
      <Suggestion tag={parsedInfo.field} list={featuredList} />
    </div>
  );
};

export default DetailPage;
