import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "@mui/material";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileWidth = useMediaQuery("(max-width:1279px)");
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
    if (!mobileWidth) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, mobileWidth]);

  return (
    <>
      <Container>
        <header className={styles.header}>
          <Link className={styles.logo}>LANDING</Link>
          <nav className={styles.mainNav}>
            <Navigation />
          </nav>
          <button onClick={handleMenuOpen} className={styles.sideMenuToggle}>
            {isMenuOpen ? <GrClose size={50} /> : <GiHamburgerMenu size={50} />}
          </button>
        </header>
      </Container>
      <Menu
        customCrossIcon={false}
        customBurgerIcon={false}
        width={"100%"}
        onClose={handleMenuOpen}
        isOpen={isMenuOpen}
        right
      >
        {<Navigation />}
      </Menu>
    </>
  );
}
