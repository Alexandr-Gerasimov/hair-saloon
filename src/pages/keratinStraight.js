//import MyClients from "../components/myClients/myClients";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
//import { images } from "../images/gallery-image";

export function KeratinStraight() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <p className={styles.text} onClick={goBack}>
        На главную
      </p>
      <p className={styles.headText}>Кератиновое выпрямление</p>
      <p className={styles.headText}>Раздел в разработке</p>
    </>
  );
}
