import styled from "@emotion/styled";
import { ListProps } from "./newsLetters";
import Image from "next/image";

export const NewsLetter = ({ list }: { list: ListProps | null }) => {
  const OutLine = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);

    .grid {
      margin: 20px;
      .title {
      }
    }
  `;

  const ImageStyle = styled.div`
    /* background-color: red; */
    border-radius: 10px;
  `;

  const BtnStyle = styled.button`
    font-size: 12px;
    margin: 10px 0;
  `;
  console.log(list);
  console.log(list?.publisher);
  console.log(list?.field);
  return (
    <OutLine>
      <div className="grid">
        <ImageStyle>
          <Image src="/body.png" alt="" width={319} height={319} />
        </ImageStyle>
        <BtnStyle>{list?.field}</BtnStyle>
        {list?.keywords.map((el, idx) => (
          <BtnStyle key={idx}>{el}</BtnStyle>
        ))}
        <div className="title">
          <span>{list?.newsletterName}</span>
          <span>{list?.publisher}</span>
        </div>

        <div>{list?.introduction}</div>
      </div>
    </OutLine>
  );
};
