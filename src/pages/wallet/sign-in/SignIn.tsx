import React from "react";
import styles from "./signin.module.css";
import Navbar from "../../../components/navbar/Navbar";
const Wallet = () => {
  return (
    <>
      <Navbar />
      <div className={styles.global}>
        <div className={styles.container}>
          <div className={styles.sidebar}></div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
