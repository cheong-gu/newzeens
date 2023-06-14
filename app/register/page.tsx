"use client";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsletterForm from "./components/NewsletterForm";
import { NewsletterResponseType } from "./newsletter.type";
import ListCard from "./components/ListCard";

const RegisterPage = () => {
  const [totalLength, setTotalLength] = useState(0);
  const [list, setList] = useState<NewsletterResponseType[]>([]);

  const getNewsletterList = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/newsLetter?page=1`);
      if (!response.ok) {
        alert("리스트를 불러올 수 없습니다. 다시 시도해주세요.");
      }
      const { data, totalLength } = await response.json();
      setList(data);
      setTotalLength(totalLength);
      console.log("[RegisterPage/getNewsletterList]", { data, totalLength });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(`http://localhost:8080/newsLetter/${id}`, {
          method: "DELETE",
        });
        console.log("[NewsletterContaint/postNewsletter]", { response });

        if (!response.ok) {
          alert("삭제에 실패했습니다.");
          return;
        } else {
          getNewsletterList();
        }
      } catch (e) {
        console.error(e);
      }
    },
    [getNewsletterList]
  );

  useEffect(() => {
    getNewsletterList();
  }, [getNewsletterList]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>뉴스레터 등록하기</h1>
        <NewsletterForm updateList={getNewsletterList} />
      </div>
      <div className={`${styles.container} ${styles["container-margin"]}`}>
        <h1 className={styles.title}>
          리스트 관리{" "}
          <span className={styles["title-index"]}>{totalLength}</span>
        </h1>
        {list && list.length > 0 ? (
          list.map((data, index) => (
            <ListCard
              key={`${data.newsletterName}_${index}`}
              index={totalLength - index}
              list={data}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div>데이터를 찾을 수 없습니다.</div>
        )}
      </div>
    </main>
  );
};

export default RegisterPage;
