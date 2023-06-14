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

interface ListCardProps {
  index: number;
  list: NewsletterResponseType;
  onDelete: (id: string) => void;
}

const ListCard = ({ list, index, onDelete }: ListCardProps) => {
  const { _id, newsletterName, mainImage, publisher, introduction } = list;
  return (
    <ListWrapper>
      <ListInfo>
        <Title>{index}</Title>
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
      <ListButton type="button" onClick={() => onDelete(_id)}>
        <Image src="/delete.svg" alt="delete" width={24} height={24} />
      </ListButton>
    </ListWrapper>
  );
};

export default ListCard;
