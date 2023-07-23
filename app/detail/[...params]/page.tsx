import React from "react";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";
import { NewsletterResponseType } from "../../register/newsletter.type";

const getCurrentNewsletter = async (id: string) => {
  const res = await fetch(`https://newzeens.store/newsLetter/${id}`, {
    next: { revalidate: 10 },
  });
  if (!res) {
    throw new Error("[DetailPage/getCurrentNewsletter] Something Wrong...");
  }
  const data = await res.json();
  return data as NewsletterResponseType;
};

const getFeaturedNewsletter = async (
  id: string,
  tag: string
): Promise<NewsletterResponseType[]> => {
  try {
    const response = await fetch(
      `https://newzeens.store/newsLetter?field=${tag}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong...");
    }

    const { data }: { data: NewsletterResponseType[] } = await response.json();
    const filteredData = data.filter((newsletter) => newsletter._id !== id);

    const shuffledArray = shuffleArray(filteredData);
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
  params: { params: string[] };
}

export default async function Page({ params: { params } }: DetailPageProps) {
  const newsletterInfo = await getCurrentNewsletter(params[0]);
  const featuredList = await getFeaturedNewsletter(
    params[0],
    newsletterInfo.field
  );

  return (
    <div>
      <NewsLetterInfo info={newsletterInfo} />
      <Suggestion tag={newsletterInfo.field} list={featuredList} />
    </div>
  );
}
