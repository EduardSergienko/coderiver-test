import Container from "../Container/Container";
import styles from "./MainContent.module.scss";
import { sliderImages } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
export default function MainContent() {
  return (
    <section className={styles.mainContent}>
      <Container>
        <h2 className={styles.swipeTitle}>CHOOSE LOOKS</h2>
        <Swiper
          modules={[FreeMode, Navigation]}
          freeMode={true}
          navigation={true}
          slidesPerView={4}
          spaceBetween={5}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.aboutSection}>
          <h3>MORE ABOUT US</h3>
          <p style={{ marginBottom: 25 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            enim sed libero commodo efficitur. Suspendisse et lorem ac neque
            dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut
            pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus
            quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus
            felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc
            ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu
            condimentum. Morbi vitae convallis purus, ac finibus ipsum.
          </p>
          <p>
            Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam
            pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu,
            eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus,
            urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus
            sit amet volutpat ante, ut condimentum lorem. Quisque auctor
            sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam
            sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit.
            Curabitur ac accumsan velit. In hac habitasse platea dictumst
          </p>
        </div>
      </Container>
    </section>
  );
}
