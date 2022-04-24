import React from "react";
import styles from "./homepage.module.css";
import Explorer from "../../components/explorer/Explorer";
import Navbar from "../../components/navbar/Navbar";
import Searchbar from "../../components/searchbar/Searchbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.global}>
        <div className={styles.search}>
          <Searchbar />
        </div>
        <div className={styles.container}>
          <div className={styles.explorer}>
            <Explorer />
          </div>
          <div className={styles.sidebar}></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
