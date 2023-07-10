import React from "react";
import styles from "./styles.module.css";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";
import { NewsletterResponseType } from "../../register/newsletter.type";

const getCurrentNewsletter = async (id: string) => {
  const res = await fetch(
    `http://ec2-52-78-212-222.ap-northeast-2.compute.amazonaws.com:8080/newsLetter/${id}`,
    {
      next: { revalidate: 0 },
    }
  );
  if (!res) {
    throw new Error("[DetailPage/getCurrentNewsletter] Something Wrong...");
  }
  const data = await res.json();
  return data as NewsletterResponseType;
};

const getFeaturedNewsletter = async (
  tag: string
): Promise<NewsletterResponseType[]> => {
  try {
    const response = await fetch(
      `http://localhost:8080/newsLetter?field=${tag}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong...");
    }

    const { data }: { data: NewsletterResponseType[] } = await response.json();
    const shuffledArray = shuffleArray(data);
    const selectedData = shuffledArray.slice(0, 6);

    return selectedData;
  } catch (error) {
    throw new Error(`[DetailPage/getFeaturedNewsletter] ${error}`);
  }
};

const shuffleArray = (
  array: NewsletterResponseType[]
): NewsletterResponseType[] => {
  const shuffled = [...array];

  for (
    let currentIndex = shuffled.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
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
