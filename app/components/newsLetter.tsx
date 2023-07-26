import styled from "@emotion/styled";
import { ListProps } from "./newsLetters";
import Image from "next/image";
import { ImageStyle, OutLine } from "./styles/NewsLetter.styles";
import Link from "next/link";
import { NewsletterResponseType } from "../register/newsletter.type";

export const NewsLetter = ({ list }: { list: ListProps }) => {
  const { newsletterName, mainImage, publisher, introduction } = list;
  return (
    <OutLine>
      <Link href={`/${list?._id}`} prefetch={false}>
        <div className="grid">
          <ImageStyle>
            <Image className="image" src={mainImage} alt="image" fill />
          </ImageStyle>
          <ul>
            <li>{list?.field}</li>
          </ul>

          <div className="titleDiv">
            <span className="title">{newsletterName}</span>
            <span className="publisher">{publisher}</span>
          </div>

          <div className="introduction">{introduction}</div>
        </div>
      </Link>
    </OutLine>
  );
};
