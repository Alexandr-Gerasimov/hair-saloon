import React from "react";
import styles from "./header.module.css";
import lilia from "../../images/lilia2.png";
import { Link } from "react-scroll";

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
        <nav>
      <ul className={styles.mainMenu}>
        <li className={styles.menu}>
          <Link
            activeClass="active"
            to="about_me"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Обо мне
          </Link>
        </li>
        <li className={styles.menu}>
          <Link
            activeClass="active"
            to="my_services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Мои услуги
          </Link>
        </li>
        <li className={styles.menu}>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
      </div>
    </>
  );
}