"use client";

import React from "react";
import { NewsletterResponseType } from "../../register/newsletter.type";
import {
  CardImage,
  Container,
  SuggestionBox,
  SuggestionCard,
  SuggestionIntroduction,
  SuggestionPublisher,
  SuggestionTitle,
  SuggestionTitleBox,
  Title,
  Wrapper,
} from "./styles/suggestion.styles";

interface SuggestionProps {
  tag: string;
  list: NewsletterResponseType[];
}

const Suggestion = ({ tag, list }: SuggestionProps) => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <strong>{tag}</strong>추천 뉴스레터
        </Title>
        <SuggestionBox>
          {list.map((item, index) => {
            const { _id, newsletterName, mainImage, publisher, introduction } =
              item;
            return (
              <SuggestionCard
                key={`${newsletterName}_${index}`}
                href={`/${_id}`}
              >
                <CardImage
                  src={mainImage}
                  alt={newsletterName}
                  width={182}
                  height={182}
                />
                <div>
                  <SuggestionTitleBox>
                    <SuggestionTitle>{newsletterName}</SuggestionTitle>
                    <SuggestionPublisher>{publisher}</SuggestionPublisher>
                  </SuggestionTitleBox>
                  <SuggestionIntroduction>
                    {introduction}
                  </SuggestionIntroduction>
                </div>
              </SuggestionCard>
            );
          })}
        </SuggestionBox>
      </Container>
    </Wrapper>
  );
};

export default Suggestion;
