import Container from "../Container/Container";
import Content from "../Content/Content";
import styles from "./MainContent.module.scss";
import { sliderImages } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "swiper/css";

export default function MainContent() {
  return (
    <main className={styles.mainSection}>
      <Container>
        <div className={styles.mainContent}>
          <Content heading={"CHOOSE LOOKS"}>
            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={"auto"}
              spaceBetween={40}
              centeredSlides={true}
              centeredSlidesBounds={true}
            >
              {sliderImages.map((item, index) => (
                <SwiperSlide style={{ width: 239 }} key={index}>
                  <Link>
                    <img src={item} alt={`Slide img ${index}`} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Content>

          <Content heading={"MORE ABOUT US"}>
            <div className={styles.aboutSection}>
              <Fade bottom>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sed enim sed libero commodo efficitur. Suspendisse et lorem ac
                  neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis
                  purus ut pretium. Vivamus ornare mauris non ligula egestas,
                  accumsan faucibus quam sollicitudin. Duis efficitur lorem
                  tellus. Aliquam non rhoncus felis, porttitor consequat quam.
                  Morbi gravida semper mattis. Nunc ultrices justo in pulvinar
                  convallis. Curabitur dapibus ut tellus eu condimentum. Morbi
                  vitae convallis purus, ac finibus ipsum.
                </p>
              </Fade>
              <Fade bottom>
                <p>
                  Suspendisse nec pharetra turpis. Aenean id nunc id orci
                  aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum
                  vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est
                  et aliquam dapibus, urna mauris sagittis mi, et mattis metus
                  magna vel tellus. Phasellus sit amet volutpat ante, ut
                  condimentum lorem. Quisque auctor sollicitudin dui, vitae
                  egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh
                  molestie, aliquam libero maximus, feugiat velit. Curabitur ac
                  accumsan velit. In hac habitasse platea dictumst
                </p>
              </Fade>
            </div>
          </Content>
        </div>
      </Container>
    </main>
  );
}
