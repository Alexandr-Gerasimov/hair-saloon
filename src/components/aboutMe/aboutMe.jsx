import React from "react";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <div className={styles.about} id="about_me">
        <p id="aboutMe" className={styles.text}>Привет! Меня зовут Лилия. Я специалист по наращиванию волос и афрокудрям! Рада приветствовать тебя на моем сайте!</p>
      </div>
    </>
  );
}