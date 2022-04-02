import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { SIDEBAR_DATA } from "./Data";

const Sidebar = () => {
  const [reveal, setReveal] = useState(true);
  const show = reveal ? styles.reveal : styles.hide;

  return (
    <div>
      <div className={styles.drawer}>
        <div
          onClick={(e) => {
            setReveal(!reveal);
          }}
        >
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
        </div>
        <div className={`${styles.bar} ${show} `}>
          <div className={styles.vl} />
          <div>
            <ul className={styles.list}>
              <li>Home</li>
              <li>Blockchain</li>
              <li>Tokens</li>
              <li>Ressources</li>
              <li>More</li>
              <li>Wallet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
