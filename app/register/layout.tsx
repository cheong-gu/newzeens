import React from "react";
import styles from "./styles.module.css";
import NewsletterForm from "./components/NewsletterForm";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>뉴스레터 등록하기</h1>
        <NewsletterForm />
      </div>
      {children}
    </main>
  );
};

export default layout;
