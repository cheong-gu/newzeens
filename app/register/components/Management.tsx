"use client";

import React from "react";
import { NewsletterFormType } from "../newsletter.type";
import {
  ListWrapper,
  ListButton,
  ListInfo,
  InfoBox,
  Title,
  Summary,
  Caption,
} from "./styles/Management.styles";
import Image from "next/image";

interface ManagementProps {
  list: NewsletterFormType[];
}

const Management = ({ list }: ManagementProps) => {
  const handleDelete = () => {
    alert("삭제 기능 준비중");
  };

  return (
    <>
      {list && list.length > 0 ? (
        list.map(
          ({ newsletterName, publisher, introduction, mainImage }, index) => (
            <ListWrapper key={`${newsletterName}_${index}`}>
              <ListInfo>
                <Title>{list.length - index}</Title>
                <Image
                  src={mainImage}
                  alt={newsletterName}
                  width={48}
                  height={48}
                  style={{ margin: "0px 16px" }}
                />
                <InfoBox>
                  <Title>
                    {newsletterName}
                    <Caption>{publisher}</Caption>
                  </Title>
                  <Summary>{introduction}</Summary>
                </InfoBox>
              </ListInfo>
              <ListButton type="button" onClick={handleDelete}>
                <Image src="/delete.svg" alt="delete" width={24} height={24} />
              </ListButton>
            </ListWrapper>
          )
        )
      ) : (
        <div>데이터가 존재하지 않습니다.</div>
      )}
    </>
  );
};

export default Management;
