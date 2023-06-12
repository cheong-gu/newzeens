import React from "react";
import styles from "./styles/suggestion.module.css";
import Image from "next/image";
import { NewsletterResponseType } from "../../../register/newsletter.type";
import Link from "next/link";

interface SuggestionProps {
  tag: string;
  list: NewsletterResponseType[];
}

const Suggestion = ({ tag, list }: SuggestionProps) => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>
        <strong className={styles["colored"]}>{tag}</strong>추천 뉴스레터
      </h1>
      <div className={styles["suggestion-box"]}>
        {list.map((item, index) => {
          const { _id, newsletterName, mainImage, publisher, introduction } =
            item;
          const encodedURI = encodeURIComponent(JSON.stringify(item));
          return (
            <Link
              key={`${newsletterName}_${index}`}
              className={styles["suggestion-card"]}
              href={`detail/${_id}/${encodedURI}`}
            >
              <Image
                className={styles["card-image"]}
                src={mainImage}
                alt={newsletterName}
                width={182}
                height={182}
              />
              <div>
                <div className={styles["suggestion-title-box"]}>
                  <p className={styles["suggestion-title"]}>{newsletterName}</p>
                  <p className={styles["suggestion-publisher"]}>{publisher}</p>
                </div>
                <p className={styles["suggestion-introduction"]}>
                  {introduction}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Suggestion;
