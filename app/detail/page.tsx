import React from "react";
import styles from "./styles.module.css";
import Suggestion from "./components/Suggestion";
import NewsLetterInfo from "./components/NewsLetterInfo";

// FIXME: page.tsx => [id].tsx 파일로 변경
const DetailPage = () => {
  return (
    <div className={styles.wrapper}>
      <NewsLetterInfo />
      <div className={styles.divider} />
      <Suggestion tag="마케팅/브랜딩" />
    </div>
  );
};

export default DetailPage;
