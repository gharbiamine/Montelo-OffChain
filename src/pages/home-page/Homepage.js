import React from "react";
import styles from "./homepage.module.css";
import Explorer from "../../components/explorer/Explorer.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import Searchbar from "../../components/searchbar/Searchbar";

const Homepage = () => {
  return (
    <>
      <div className={styles.global}>
        <div className={styles.search}>
          <Searchbar />
        </div>
        <div className={styles.container}>
          <div className={styles.explorer}>
            <Explorer />
          </div>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
