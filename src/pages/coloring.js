import MyClients from "../components/myClients/myClients";
import { images } from "../images/gallery-image";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function HairColoring() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };
    return (
      <>
        <p className={styles.text} onClick={goBack}>На главную</p>
        <p className={styles.headText}>Ботокс волос</p>
        <p className={styles.headText}>Раздел в разработке</p>
      </>
    );
  }