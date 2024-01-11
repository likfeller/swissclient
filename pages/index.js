import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Flyer from "./components/FLYER";
import Menu from "./components/Menu";
import Werbung from "./components/Werbung";
import Zeitung from "./components/Zeitung";
import Karten from "./components/Karten";
import Zeitschriften from "./components/Zeitschriften";

export const z_props = [
  {
    text: "Something nice",
    image: <img src="swiss.webp.jpg" alt="Swiss Image" width={100} />,
  },
];
export default function Home({ z_props }) {
  const [showZeitung, setShowZeitung] = useState(false);
  const handleZeitungButtonClick = () => {
    setShowZeitung(!showZeitung);
  };

  const handleOthers = () => {
    setShowZeitung(false);
  };

  return (
    <div className={styles.background}>
      <Head>
        <title>EEs</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <img src="swiss.webp.jpg" width={379} className={styles.swissBig} />

          <div className={styles.DivRight}>
            <div className={styles.tabs}>
              <menu className={styles.tabsMenu}>
                {/* <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 0 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(0)}>
                  FLYER
                </button> */}
                {/* <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 1 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(1)}>
                  MENU
                </button> */}
                {/* <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 2 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(2)}>
                  WERBUNG
                </button> */}
                <button
                  className={`${styles.tabsButton} ${
                    showZeitung ? styles.active : ""
                  }`}
                  onClick={handleZeitungButtonClick}>
                  ZEITUNG
                </button>
                {/* <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 4 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(4)}>
                  ZEITSCHRIFTEN
                </button>
                <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 5 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(5)}>
                  KARTEN
                </button> */}
              </menu>
              <div className={styles.tabContent}>
                {showZeitung && <Zeitung z_props={z_props} />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <img src="phone.png" width={30} className={styles.Phone} alt="Nr tel" />
        <p className={styles.PhoneNr}>+41787104195 </p>
        <img src="swiss.webp.jpg" width={25} className={styles.swiss} />
        <p className={styles.PhoneNr2}>+41764554912 </p>
        <img src="swiss.webp.jpg" width={25} className={styles.swiss2} />
        <img src="email.png" width={30} className={styles.Email} />
        <p className={styles.Email1}>ee-druck.ch@hotmail.com</p>
      </footer>
    </div>
  );
}
