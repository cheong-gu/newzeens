import Image from "next/image";
import React from "react";
import styles from "./styles/info.module.css";
import Button from "./Button";
import Link from "next/link";

const NewsLetterInfo = () => {
  return (
    <div className={styles["info-container"]}>
      <Image
        className={styles["main-image"]}
        src={MOCK_DATA.mainImage}
        alt="main"
        width={387}
        height={387}
      />
      <div className={styles["info-box"]}>
        <div>
          {" "}
          <h1 className={styles["newsletter-name"]}>
            {MOCK_DATA.newsletterName}
          </h1>
          <h3 className={styles["publisher"]}>{MOCK_DATA.publisher}</h3>
          <div className={styles["keyword-box"]}>
            <div className={styles["keyword-row"]}>
              <p className={styles["category"]}>소개</p>
              <p className={styles["explanation"]}>{MOCK_DATA.introduction}</p>
            </div>
            <div className={styles["keyword-row"]}>
              <p className={styles["category"]}>발송 주기</p>
              <p className={styles["explanation"]}>
                {MOCK_DATA.deliveryPeriod}
              </p>
            </div>
            <div className={styles["keyword-row"]}>
              <p className={styles["category"]}>구독비</p>
              <p className={styles["explanation"]}>
                {MOCK_DATA.subscriptionFee}
              </p>
            </div>
          </div>
        </div>
        <div className={styles["button-box"]}>
          <Link className={styles["link"]} href={MOCK_DATA.previousIssueLink}>
            <Button styleType="outlined" label="지난 호 보기" />
          </Link>
          <div className={styles["button-margin"]} />
          <Link className={styles["link"]} href={MOCK_DATA.subscribeLink}>
            <Button styleType="solid" label="구독하기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterInfo;

const MOCK_DATA = {
  newsletterName: "돌멩이레터",
  publisher: "슬로워크",
  introduction: "분명한 철학이 있는 브랜드를 소개하는 뉴스레터",
  subscriptionFee: "무료",
  field: "마케팅/브랜딩",
  keywords: ["기획자", "인사이트", "라이프스타일"],
  deliveryPeriod: "주 1회",
  previousIssueLink: "https://github.com/cheong-gu/newzeens",
  subscribeLink: "https://github.com/cheong-gu/newzeens",
  mainImage:
    "https://velog.velcdn.com/images/gparkkii/profile/b16e4ab2-0ff9-458f-95c1-7c8de584dae8/gparkkii's_zepeto.jpeg",
};
