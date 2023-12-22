import React from "react";
import styles from "./newHeader.module.css";
import mainFoto from "../../images/1234.png";

export default function NewHeader() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
  return (
    <>
      <div className={styles.header}>
        <img
          src={mainFoto}
          className={styles.image}
          alt="изображение отсутствует"
        />
      </div>
    </>
  );
}
