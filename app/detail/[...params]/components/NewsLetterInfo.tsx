"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import Chip from "./Chip";
import { NewsletterResponseType } from "../../../register/newsletter.type";
import {
  ButtonBox,
  Category,
  ChipBox,
  Divider,
  Explanation,
  ImageBox,
  InfoBox,
  InfoContainer,
  KeywordBox,
  KeywordRow,
  NewsletterName,
  OutlinedLink,
  Publisher,
  SolidLink,
  Wrapper,
} from "./styles/Info.styles";

interface NewsLetterInfoProps {
  info: NewsletterResponseType;
}

const NewsLetterInfo = ({ info }: NewsLetterInfoProps) => {
  return (
    <Wrapper>
      <InfoContainer>
        <ImageBox>
          <Image src={info.mainImage} alt="main" width={388} height={388} />
        </ImageBox>
        <InfoBox>
          <div>
            <NewsletterName>{info.newsletterName}</NewsletterName>
            <Publisher>{info.publisher}</Publisher>
            <KeywordBox>
              <KeywordRow>
                <Category>소개</Category>
                <Explanation>{info.introduction}</Explanation>
              </KeywordRow>
              <KeywordRow>
                <Category>발송 주기</Category>
                <Explanation>{info.deliveryPeriod}</Explanation>
              </KeywordRow>
              <KeywordRow>
                <Category>구독비</Category>
                <Explanation>{info.subscriptionFee}</Explanation>
              </KeywordRow>
            </KeywordBox>
            <ChipBox>
              <Chip active label={info.field} />
              {info.keywords?.map((value, index) => (
                <Chip key={`${value}_${index}`} label={value} />
              ))}
            </ChipBox>
          </div>
          <ButtonBox>
            <OutlinedLink
              href={info.previousIssueLink ?? "/"}
              style={{
                pointerEvents: info.previousIssueLink === "" ? "none" : "auto",
              }}
            >
              <Button styleType="outlined" label="지난 호 보기" />
            </OutlinedLink>
            <SolidLink href={info.subscribeLink ?? "/"}>
              <Button styleType="solid" label="구독하기" />
            </SolidLink>
          </ButtonBox>
        </InfoBox>
      </InfoContainer>
      <Divider />
    </Wrapper>
  );
};

export default NewsLetterInfo;
