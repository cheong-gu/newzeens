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
  params: { params: string[] };
}

export default async function Page({ params: { params } }: DetailPageProps) {
  const parsedInfo = JSON.parse(
    decodeURIComponent(params[1])
  ) as NewsletterResponseType;
  const featuredList = await getFeaturedNewsletter(parsedInfo.field);
  return (
    <div className={styles.wrapper}>
      <NewsLetterInfo info={parsedInfo} />
      <div className={styles.divider} />
      <Suggestion tag={parsedInfo.field} list={featuredList} />
    </div>
  );
}
