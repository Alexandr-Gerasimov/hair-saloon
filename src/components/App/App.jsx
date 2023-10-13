import React from "react";
import Header from "../header/header";
import styles from "./App.module.css"
import hair from "../../images/volosy.png"
import AboutMe from "../aboutMe/aboutMe";
import MyClients from "../myClients/myClients";
import Contacts from "../contacts/contacts";
import NewHeader from "../newHeader/newHeader";

export default function App() {

  return (
    <>
    <div className={styles.main}>
      <div>
        <NewHeader />
        <Header />
        <AboutMe />
        <MyClients />
        <Contacts />
      </div>
    </div>  
    </>
  );
}
