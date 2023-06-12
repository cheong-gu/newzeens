import React from "react";
import styles from "./styles.module.css";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";
import { NewsletterResponseType } from "../../register/newsletter.type";

const getCurrentNewsletter = async (id: string) => {
  const res = await fetch(`http://localhost:8080/newsLetter/${id}`, {
    next: { revalidate: 0 },
  });
  if (!res) {
    throw new Error("[DetailPage/getCurrentNewsletter] Something Wrong...");
  }
  const data = await res.json();
  return data as NewsletterResponseType;
};

const getFeaturedNewsletter = async (tag: string) => {
  const res = await fetch(`http://localhost:8080/newsLetter?field=${tag}`, {
    next: { revalidate: 0 },
  });
  if (!res) {
    throw new Error("[DetailPage/getFeaturedNewsletter] Something Wrong...");
  }
  const { data } = await res.json();
  return data as NewsletterResponseType[];
};

interface DetailPageProps {
  params: { params: string };
}

export default async function Page({ params: { params } }: DetailPageProps) {
  const newsletterInfo = await getCurrentNewsletter(params);
  const featuredList = await getFeaturedNewsletter(newsletterInfo.field);
  return (
    <div className={styles.wrapper}>
      <NewsLetterInfo info={newsletterInfo} />
      <div className={styles.divider} />
      <Suggestion tag={newsletterInfo.field} list={featuredList} />
    </div>
  );
}
