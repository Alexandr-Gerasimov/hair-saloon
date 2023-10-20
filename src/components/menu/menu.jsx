import React from "react";
import styles from "./menu.module.css";
import hot from "../../images/image8.jpg"
import afro from "../../images/afro.jpeg"
import keratin from "../../images/keratin.jpeg"
import color from "../../images/color.jpeg"
import { useNavigate } from "react-router-dom";

export default function Menu() {

  const navigate = useNavigate();

  const hotBuild = () => {
    navigate("/hot_build_up");
  };
  const afroCulrs = () => {
    navigate("/afro");
  };
  const keratinStraight = () => {
    navigate("/keratin");
  };
  const hairColoring = () => {
    navigate("/color");
  };

  return (
    <>
      <div className={styles.menu} id="my_services">
        <p className={styles.text}>Мои услуги</p>
        <ul className={styles.block}>
          <li onClick={hotBuild} className={styles.button}>
            <img src={hot} className={styles.image} alt="тут была картинка"/>
            <p className={styles.text}>Горячее наращивание</p>
          </li>
          <li  onClick={afroCulrs} className={styles.button}>
          <img src={afro} className={styles.image} alt="тут была картинка"/>
            <p className={styles.text}>Афро кудри</p>
          </li>
          <li onClick={keratinStraight} className={styles.button}>
          <img src={keratin} className={styles.image} alt="тут была картинка"/>
            <p className={styles.text}>Кератиновое выпрямление</p>
          </li>
          <li onClick={hairColoring} className={styles.button}>
          <img src={color} className={styles.image} alt="тут была картинка"/>
            <p className={styles.text}>Окрашивание волос</p>
          </li>
        </ul>
      </div>
    </>
  );
}