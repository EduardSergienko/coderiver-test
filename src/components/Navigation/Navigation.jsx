import styles from "./Navigation.module.scss";
import { navLinks } from "../../data";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <ul className={styles.navigationList}>
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link className={styles.navLink}>{item.name}</Link>
        </li>
      ))}

      <li>
        <Link className={styles.buyLink}>
          <span>BUY</span>
        </Link>
      </li>
    </ul>
  );
}
