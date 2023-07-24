"use client";

import React, { useState, useCallback, useEffect } from "react";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";
import { NewsletterResponseType } from "../../register/newsletter.type";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "../../../public/loading.json";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getFeaturedNewsletter = async (
  id: string,
  tag: string
): Promise<NewsletterResponseType[]> => {
  try {
    const response = await fetch(
      `https://newzeens.store/newsLetter?field=${tag}`
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

export default function Page({ params: { params } }: DetailPageProps) {
  const [info, setInfo] = useState<NewsletterResponseType | null>(null);
  const [featuredList, setFeaturedList] = useState<NewsletterResponseType[]>(
    []
  );

  const getCurrentNewsletter = useCallback(
    async (id: string) => {
      try {
        const res = await fetch(`https://newzeens.store/newsLetter/${id}`);
        if (!res.ok) {
          throw new Error(
            "[DetailPage/getCurrentNewsletter] Something Wrong..."
          );
        }
        const data = await res.json();
        const featuredRes = await getFeaturedNewsletter(params[0], data.field);

        setInfo(data);
        setFeaturedList(featuredRes);
      } catch (error) {
        console.error(error);
      }
    },
    [params]
  );

  useEffect(() => {
    if (params[0]) {
      getCurrentNewsletter(params[0]);
    }
  }, [getCurrentNewsletter, params]);

  return (
    <>
      {info && featuredList ? (
        <div>
          <NewsLetterInfo info={info} />
          <Suggestion tag={info.field} list={featuredList} />
        </div>
      ) : (
        <Container id="indicator">
          <Player
            autoplay
            loop
            src={loading}
            style={{ width: 144, height: 105 }}
          />
        </Container>
      )}
    </>
  );
}
