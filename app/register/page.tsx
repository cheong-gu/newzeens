import React from "react";
import Management from "./components/Management";
import { NewsletterFormType } from "./newsletter.type";
import styles from "./styles.module.css";

const getNewsletterList = async () => {
  const res = await fetch(`http://localhost:8080/newsLetter`, {
    next: { revalidate: 0 },
  });
  if (!res) {
    throw new Error("[RegisterPage/getNewsletterList] Something Wrong...");
  }
  const data: NewsletterFormType[] = await res.json();
  return data;
};

const RegisterPage = async () => {
  const newsletterList = await getNewsletterList();

  return (
    <div className={`${styles.container} ${styles["container-margin"]}`}>
      <h1 className={styles.title}>리스트 관리</h1>
      <Management list={newsletterList} />
    </div>
  );
};

export default RegisterPage;
