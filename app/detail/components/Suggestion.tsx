import React from "react";
import styles from "./styles/suggestion.module.css";
import Image from "next/image";
import { NewsletterResponseType } from "../../register/newsletter.type";

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
        {list.map(
          ({ newsletterName, publisher, introduction, mainImage }, index) => (
            <div
              key={`${newsletterName}_${index}`}
              className={styles["suggestion-card"]}
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Suggestion;

const MOCK_DATA = [
  {
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
  },
  {
    newsletterName: "캐릿",
    publisher: "대학내일",
    introduction: "Z세대 트렌드와 마케팅 인사이트를 전달하는 뉴스레터",
    subscriptionFee: "무료",
    field: "마케팅/브랜딩",
    keywords: ["마케터", "인사이트", "MZ"],
    deliveryPeriod: "주 1회",
    previousIssueLink: "https://github.com/cheong-gu/newzeens",
    subscribeLink: "https://github.com/cheong-gu/newzeens",
    mainImage:
      "https://velog.velcdn.com/images/gparkkii/profile/b16e4ab2-0ff9-458f-95c1-7c8de584dae8/gparkkii's_zepeto.jpeg",
  },
  {
    newsletterName: "까탈로그",
    publisher: "디에디트",
    introduction: "에디터 '디에디트'가 까다롭게 고른 신제품 소개 뉴스레터",
    subscriptionFee: "무료",
    field: "마케팅/브랜딩",
    keywords: ["마케터", "인사이트", "MZ"],
    deliveryPeriod: "주 1회",
    previousIssueLink: "https://github.com/cheong-gu/newzeens",
    subscribeLink: "https://github.com/cheong-gu/newzeens",
    mainImage:
      "https://velog.velcdn.com/images/gparkkii/profile/b16e4ab2-0ff9-458f-95c1-7c8de584dae8/gparkkii's_zepeto.jpeg",
  },
  {
    newsletterName: "어거스트",
    publisher: "구현모 외 7명",
    introduction: "미디어 산업 인사이트를 전달하는 뉴스레터",
    subscriptionFee: "무료",
    field: "마케팅/브랜딩",
    keywords: ["마케터", "인사이트", "MZ"],
    deliveryPeriod: "주 1회",
    previousIssueLink: "https://github.com/cheong-gu/newzeens",
    subscribeLink: "https://github.com/cheong-gu/newzeens",
    mainImage:
      "https://velog.velcdn.com/images/gparkkii/profile/b16e4ab2-0ff9-458f-95c1-7c8de584dae8/gparkkii's_zepeto.jpeg",
  },
  {
    newsletterName: "주간 배짱이",
    publisher: "배달의민족",
    introduction:
      "배달의민족'을 '짱' 좋아하는 '이'들, '배짱이'들을 위한 음식 정보 뉴스레터",
    subscriptionFee: "무료",
    field: "마케팅/브랜딩",
    keywords: ["마케터", "인사이트", "MZ"],
    deliveryPeriod: "주 1회",
    previousIssueLink: "https://github.com/cheong-gu/newzeens",
    subscribeLink: "https://github.com/cheong-gu/newzeens",
    mainImage:
      "https://velog.velcdn.com/images/gparkkii/profile/b16e4ab2-0ff9-458f-95c1-7c8de584dae8/gparkkii's_zepeto.jpeg",
  },
  {
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
  },
];
