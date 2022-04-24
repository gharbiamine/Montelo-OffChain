import styles from "./searchbar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../explorer/blocks/Blockdata";

// const List = (props) => {
//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   );
// };

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
          placeholder="Search by Address / Txn / Block / Token"
        />
      </div>
    </>
  );
}

export default Searchbar;
