import styled from "@emotion/styled";
import { ListProps } from "./newsLetters";
import Image from "next/image";
import { ImageStyle, OutLine } from "./styles/NewsLetter.styles";

export const NewsLetter = ({ list }: { list: ListProps | null }) => {
  return (
    <OutLine>
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

        <div className="titleDiv">
          <span className="title">{list?.newsletterName}</span>
          <span className="publisher">{list?.publisher}</span>
        </div>

        <div className="introduction">{list?.introduction}</div>
      </div>
    </OutLine>
  );
};
