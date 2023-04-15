import Container from "../Container/Container";
import styles from "./Hero.module.scss";
import { ReactComponent as Android } from "../../img/svg/android.svg";
import { ReactComponent as Ios } from "../../img/svg/ios.svg";
import HeroImg from "../../img/hero_img.png";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroWrap}>
          <div className={styles.leftBox}>
            <div className={styles.appInfo}>
              <Ios />
              <Android style={{ transform: "translateX(-25%)" }} />
              <p>App available</p>
            </div>
            <div>
              <h2 className={styles.heroTitle}>
                CHOOSE YOUR WINTER <span>LOOK</span>* APPAREL
              </h2>
            </div>
          </div>
          <div>
            <img className={styles.heroImg} src={HeroImg} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
