import React from "react";
import Management from "./components/Management";
import { NewsletterResponseType } from "./newsletter.type";
import styles from "./styles.module.css";

const getNewsletterList = async () => {
  const res = await fetch(`http://localhost:8080/newsLetter`, {
    next: { revalidate: 0 },
  });
  if (!res) {
    throw new Error("[RegisterPage/getNewsletterList] Something Wrong...");
  }
  const { data } = await res.json();
  return data as NewsletterResponseType[];
};

const RegisterPage = async () => {
  const newsletterList = await getNewsletterList();

  return (
    <div className={`${styles.container} ${styles["container-margin"]}`}>
      <h1 className={styles.title}>
        리스트 관리{" "}
        <span className={styles["title-index"]}>{newsletterList.length}</span>
      </h1>
      <Management list={newsletterList} />
    </div>
  );
};

export default RegisterPage;
