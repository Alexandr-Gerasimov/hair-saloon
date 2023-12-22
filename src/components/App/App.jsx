import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import NewHeader from "../newHeader/newHeader";
import Contacts from "../contacts/contacts";
import { Home } from "../../pages/home";
import { HotBuildUp } from "../../pages/hot_build-up";
import { AfroCulrs } from "../../pages/afroCulrs";
import { KeratinStraight } from "../../pages/keratinStraight";
import { HairColoring } from "../../pages/coloring";
import ScrollToTop from "../../utils/scrollToTop";

export default function App() {
  return (
    <div className={styles.main}>
      <NewHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/hot_build_up" exact element={<HotBuildUp />} />
      </Routes>
      <Routes>
        <Route path="/afro" exact element={<AfroCulrs />} />
      </Routes>
      <Routes>
        <Route path="/keratin" exact element={<KeratinStraight />} />
      </Routes>
      <Routes>
        <Route path="/color" exact element={<HairColoring />} />
      </Routes>
      <Contacts />
    </div>
  );
}
