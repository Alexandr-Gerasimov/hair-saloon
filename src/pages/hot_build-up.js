import MyClients from "../components/myClients/myClients";
import { images } from "../images/gallery-image";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function HotBuildUp() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <p className={styles.text} onClick={goBack}>
        На главную
      </p>
      <p className={styles.headText}>Горячее наращивание</p>
      <p className={styles.description}>
        💆‍♀Капсульное наращивание волос – один из самых популярных видов
        наращивания, суть которого заключается в том, что локоны крепятся при
        помощи небольших капсул. Подобная процедура занимает намного больше
        времени, чем ленточное наращивание, однако и полученный эффект держится
        дольше.👌
      </p>
      <p className={styles.description}>
        🙋‍♀В своей работе я использую итальянскую технологию капсульного
        наращивания. Итальянское наращивание по праву называют самым безопасным
        способом капсульного крепления локонов👍. Его особенность состоит в том,
        что проводится горячее кератиновое наращивание.🔥
      </p>
      <p className={styles.description}>
        👩‍🦰Во время подобной процедуры мастер выделяет несколько прядей клиента и
        закрепляет локоны при помощи нагретой капсулы. Для нагревания капсулы
        используются специальные щипцы, которые справляются с данной задачей за
        пару секунд.
      </p>
      <p className={styles.headText}>Галерея моих работ</p>
      <MyClients images={images} />
    </>
  );
}
