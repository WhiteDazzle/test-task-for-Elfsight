import React from "react";
import CharactersList from "../layouts/characters-list/characters-list";
import Header from "../layouts/header/header";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles['app-wrapper']}>
        <div className={styles.app}>
          <Header />
          <CharactersList />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
