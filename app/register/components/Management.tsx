"use client";

import React, { useCallback } from "react";
import { NewsletterResponseType } from "../newsletter.type";
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
import { useRouter } from "next/navigation";

interface ManagementProps {
  list: NewsletterResponseType[];
}

const Management = ({ list }: ManagementProps) => {
  const router = useRouter();

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await fetch(`http://localhost:8080/newsLetter/${id}`, {
          method: "DELETE",
        }).then((response) => {
          console.log("[NewsletterContaint/postNewsletter]", { response });
          router.push("/register");
        });
      } catch (e) {
        console.error(e);
      }
    },
    [router]
  );
  return (
    <>
      {list && list.length > 0 ? (
        list.map(
          (
            { _id, newsletterName, publisher, introduction, mainImage },
            index
          ) => (
            <ListWrapper key={`${newsletterName}_${index}`}>
              <ListInfo>
                <Title>{list.length - index}</Title>
                {/* <Image
                  src={mainImage}
                  alt={newsletterName}
                  width={48}
                  height={48}
                  style={{ margin: "0px 16px" }}
                /> */}
                <InfoBox>
                  <Title>
                    {newsletterName}
                    <Caption>{publisher}</Caption>
                  </Title>
                  <Summary>{introduction}</Summary>
                </InfoBox>
              </ListInfo>
              <ListButton type="button" onClick={() => handleDelete(_id)}>
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
