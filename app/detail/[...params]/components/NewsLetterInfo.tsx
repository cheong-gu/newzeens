import Image from "next/image";
import React from "react";
import styles from "./styles/info.module.css";
import Button from "./Button";
import Link from "next/link";
import Chip from "./Chip";
import { NewsletterResponseType } from "../../../register/newsletter.type";

interface NewsLetterInfoProps {
  info: NewsletterResponseType;
}

const NewsLetterInfo = ({ info }: NewsLetterInfoProps) => {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["image-box"]}>
        <Image
          className={styles["main-image"]}
          src={info.mainImage}
          alt="main"
          width={388}
          height={388}
        />
      </div>
      <div className={styles["info-box"]}>
        <div className={styles["info-text-box"]}>
          <h1 className={styles["newsletter-name"]}>{info.newsletterName}</h1>
          <h3 className={styles["publisher"]}>{info.publisher}</h3>
          <div className={styles["keyword-box"]}>
            <div className={styles["keyword-row"]}>
              <p className={styles["category"]}>소개</p>
              <p className={styles["explanation"]}>{info.introduction}</p>
            </div>
            <div className={styles["keyword-row"]}>
              <p className={styles["category"]}>발송 주기</p>
              <p className={styles["explanation"]}>{info.deliveryPeriod}</p>
            </div>
            <div className={styles["keyword-row"]}>
              <p className={styles["category"]}>구독비</p>
              <p className={styles["explanation"]}>{info.subscriptionFee}</p>
            </div>
          </div>
          <div className={styles["chip-box"]}>
            <Chip active label={info.field} />
            {info.keywords.map((value, index) => (
              <Chip key={`${value}_${index}`} label={value} />
            ))}
          </div>
        </div>
        <div className={styles["button-box"]}>
          <Link
            className={styles["link-outlined"]}
            href={info.previousIssueLink ?? "/"}
          >
            <Button styleType="outlined" label="지난 호 보기" />
          </Link>
          <Link className={styles["link-solid"]} href={info.subscribeLink}>
            <Button styleType="solid" label="구독하기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterInfo;
