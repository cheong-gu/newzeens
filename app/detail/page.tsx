import React from "react";
import styles from "./styles.module.css";
import NewsLetterInfo from "./components/NewsLetterInfo";

// FIXME: page.tsx => [id].tsx 파일로 변경
const DetailPage = () => {
  return (
    <div className={styles.wrapper}>
      <NewsLetterInfo />
      <div className={styles.divider} />
    </div>
  );
};

export default DetailPage;
