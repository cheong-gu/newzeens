import styled from "@emotion/styled";
import { ListProps } from "./newsLetters";
import Image from "next/image";
import { ImageStyle, OutLine } from "./styles/NewsLetter.styles";
import Link from "next/link";
import { NewsletterResponseType } from "../register/newsletter.type";

export const NewsLetter = ({
  list,
}: {
  list: NewsletterResponseType | null;
}) => {
  const encodedURI = encodeURIComponent(JSON.stringify(list));
  return (
    <OutLine>
      <Link href={`detail/${list?._id}/${encodedURI}`}>
        <div className="grid">
          <ImageStyle>
            <Image className="image" src="/body.png" alt="image" fill />
          </ImageStyle>
          <ul>
            <li>{list?.field}</li>
            {/* {list?.keywords.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))} */}
          </ul>

          <div>
            <span className="title">{list?.newsletterName}</span>
            <span className="publisher">{list?.publisher}</span>
          </div>

          <div className="introduction">{list?.introduction}</div>
        </div>
      </Link>
    </OutLine>
  );
};
