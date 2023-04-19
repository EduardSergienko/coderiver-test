import styles from "./Content.module.scss";
import Fade from "react-reveal/Fade";
export default function Content({ heading, children }) {
  return (
    <div className={styles.contentWrap}>
      <Fade bottom>
        <h2 className={styles.contentTitle}>{heading}</h2>
      </Fade>

      {children}
    </div>
  );
}
