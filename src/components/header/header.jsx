import React from "react";
import styles from "./header.module.css";
import lilia from "../../images/lilia2.png";

export default function Header() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.name}>Cocos hair</h1>
          <img src={lilia} className={styles.image} alt="изображение отсутствует"/>
        </div>
        <div className={styles.mainMenu}>
          <a href="#aboutMe" className={styles.menu}>Обо мне</a>
          <a href="#myClient" className={styles.menu}>Мои работы</a>
          <a href="#contacts" className={styles.menu}> Контакты</a>
        </div>
      </div>
    </>
  );
}