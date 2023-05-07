import React from "react";
import styles from "./styles.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>뉴스레터 등록하기</h1>
      </div>
      <div className={`${styles.container} ${styles["container-margin"]}`}>
        <h1 className={styles.title}>리스트 관리</h1>
      </div>
    </div>
  );
};

export default RegisterPage;
