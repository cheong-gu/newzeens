"use client";

import React, { useCallback } from "react";
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
import { useRouter } from "next/navigation";

interface ManagementProps {
  list: NewsletterFormType[];
}

const Management = ({ list }: ManagementProps) => {
  const router = useRouter();
  const deleteAlert = () => {
    const deleteAlert = confirm("전체 리스트가 삭제됩니다. 삭제하시겠습니까?");
    if (deleteAlert) {
      handleDelete();
    }
  };
  const handleDelete = useCallback(async () => {
    try {
      await fetch("http://localhost:8080/newsLetter", {
        method: "DELETE",
      }).then((response) => {
        console.log("[NewsletterContaint/postNewsletter]", { response });
        router.push("/register");
      });
    } catch (e) {
      console.error(e);
    }
  }, [router]);
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
              <ListButton type="button" onClick={deleteAlert}>
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
