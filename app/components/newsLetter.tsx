import styled from "@emotion/styled";
import { ListProps } from "./newsLetters";
import Image from "next/image";

export const NewsLetter = ({ list }: { list: ListProps | null }) => {
  const OutLine = styled.div`
    /* display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr); */

    .grid {
      ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        /* margin-top: 24px; */
        li {
          font-size: 12px;
          color: var(--primary);
          border: 1px solid white;
          border-radius: 4px;
          background-color: var(--text_gray20);
          padding: 8px;
          margin: 10px 0;
          margin-right: 4px;
          cursor: pointer;

          :hover {
            color: var(--primary);
            background-color: var(--text_gray30);
          }
        }
      }

      .title {
        font-size: 18px;
        margin-right: 4px;
      }

      .publisher {
        font-size: 14px;
        color: var(--text_gray60);
      }

      .introduction {
        margin-top: 8px;
        font-size: 16px;
        color: var(--text_gray80);
      }
    }
  `;

  const ImageStyle = styled.div`
    /* background-color: red; */
    border-radius: 10px;
  `;

  const BtnStyle = styled.button`
    /* display: flex; */
    font-size: 12px;
    margin: 10px 0;
    /* padding-right: 12px; */
    background-color: red;
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

        <ul>
          <li>{list?.field}</li>
          {list?.keywords.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>

        <div>
          <span className="title">{list?.newsletterName}</span>
          <span className="publisher">{list?.publisher}</span>
        </div>

        <div className="introduction">{list?.introduction}</div>
      </div>
    </OutLine>
  );
};
