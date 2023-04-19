import Container from "../Container/Container";
import styles from "./Hero.module.scss";
import { ReactComponent as Android } from "../../img/svg/android.svg";
import { ReactComponent as Ios } from "../../img/svg/ios.svg";
import HeroImg from "../../img/hero_img.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroWrap}>
          <div className={styles.leftBox}>
            <div className={styles.appInfo}>
              <Link>
                <Ios />
              </Link>
              <Link>
                <Android />
              </Link>

              <p>App available</p>
            </div>

            <div>
              <Fade bottom>
                <h1 className={styles.heroTitle}>
                  CHOOSE YOUR WINTER{" "}
                  <span className={styles.selectedText}>
                    LOOK<span className={styles.star}>*</span>
                  </span>
                  APPAREL
                </h1>
              </Fade>
            </div>
          </div>
          <Zoom>
            <div>
              <img
                className={styles.heroImg}
                src={HeroImg}
                alt="main hero img"
              />
            </div>
          </Zoom>
        </div>
      </Container>
    </section>
  );
}
