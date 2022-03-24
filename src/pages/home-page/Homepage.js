import React from "react";
import styles from "./homepage.module.css";
import Explorer from "../../components/Explorer/Explorer.js";
import Sidebar from "../../components/sidebar/Sidebar.js";

const Homepage = () => {
  return (
    <>
      <div className={styles.global}>
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
