import React from "react";
import styles from "./myClients.module.css";
import ReactImageGallery from "react-image-gallery";

export default function MyClients({ images }) {
  return (
    <>
      <div className={styles.about}>
        <ReactImageGallery items={images} additionalClass={styles.gallery} />
      </div>
    </>
  );
}
