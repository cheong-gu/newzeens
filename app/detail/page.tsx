import React from "react";
import styles from "./styles.module.css";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";
import { NewsletterResponseType } from "../register/newsletter.type";

// FIXME: page.tsx => [id].tsx 파일로 변경

const getFeaturedNewsletter = async (tag: string) => {
  const res = await fetch(`http://localhost:8080/newsLetter?field=${tag}`, {
    next: { revalidate: 0 },
  });
  if (!res) {
    throw new Error("[RegisterPage/getNewsletterList] Something Wrong...");
  }
  const data: NewsletterResponseType[] = await res.json();
  return data;
};

const DetailPage = async () => {
  const featuredList = await getFeaturedNewsletter("마케팅/브랜딩");
  return (
    <div className={styles.wrapper}>
      <NewsLetterInfo />
      <div className={styles.divider} />
      <Suggestion tag="마케팅/브랜딩" list={featuredList} />
    </div>
  );
};

export default DetailPage;
