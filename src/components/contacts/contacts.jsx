import React from "react";
import styles from "./contacts.module.css";
import vk from "../../images/vk.png";
import telegram from "../../images/telegram.png";
import whatsapp from "../../images/whatsapp.png"

export default function Contacts() {
  return (
    <>
      <div className={styles.header} id="contacts">
        <p className={styles.text}>Контакты</p>
        <div className={styles.contactLinks}>
            <p className={styles.phone}>Телефон: +7(962)162-26-03</p>
            <div>
            <ul className={styles.links}>
          <li className={styles.item}>
            <a href="https://t.me/+79621622603" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <img
                src={telegram}
                className={styles.icon}
                alt="telegram"
              /></a
            >
          </li>
          <li className={styles.item}>
            <a href="https://wa.me/79621622603" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <img
                src={whatsapp}
                className={styles.icon}
                alt="vk"
              /></a
            >
          </li>
          <li className={styles.item}>
            <a href="https://vk.com/lilekk1907" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <img
                src={vk}
                className={styles.icon}
                alt="vk"
              /></a
            >
          </li>
        </ul>
            </div>
        </div>
      </div>
    </>
  );
}