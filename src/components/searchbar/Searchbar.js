import styles from "./searchbar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Searchbar() {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="Search in projects"
        />
      </div>
    </>
  );
}

export default Searchbar;
