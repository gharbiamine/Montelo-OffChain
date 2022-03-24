import React from "react";
import styles from "./explorer.module.css";

const Explorer = () => {
  return (
    <>
      <div className={styles.table}>
        <table>
          <tr className={styles.row}>
            <td>Coin</td>
            <td>Market Cap</td>
            <td>Current Price</td>
            <td>Volume</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Explorer;
