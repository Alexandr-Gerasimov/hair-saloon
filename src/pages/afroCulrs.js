import MyClients from "../components/myClients/myClients";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { images } from "../images/gallery-image";

export function AfroCulrs() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };
    return (
      <>
        <p className={styles.text} onClick={goBack}>На главную</p>
        <p className={styles.headText}>Афро кудри</p>
        <MyClients images={images}/>
      </>
    );
  }