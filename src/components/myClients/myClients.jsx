import React from "react";
import styles from "./myClients.module.css";
import ReactImageGallery from "react-image-gallery";
import { images } from "./gallery-image";

export default function MyClients() {
  return (
    <>
      <div className={styles.about}>
        <p id="myClient" className={styles.text}>Мои работы</p>
        <ReactImageGallery items={images}/>
      </div>
    </>
  );
}