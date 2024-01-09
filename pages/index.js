import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

export default function Home() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className={styles.background}>
      <Head>
        <title>EEs</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.DivLeft}>
            <p className={styles.Text}>Buttons</p>
          </div>
          <div className={styles.DivRight}>
            <div className={styles.tabs}>
              <menu className={styles.tabsMenu}>
                <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 0 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(0)}>
                  FLYER
                </button>
                <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 1 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(1)}>
                  MENU
                </button>
                <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 2 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(2)}>
                  WERNUNG
                </button>
                <button
                  className={`${styles.tabsButton} ${
                    activeContentIndex === 3 ? styles.active : ""
                  }`}
                  onClick={() => setActiveContentIndex(3)}>
                  ZEITUNG
                </button>
                <button
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
                </button>
              </menu>
              <div className={styles.tabContent}>
                <ul>
                  {content[activeContentIndex].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          <h3>DRUCKEREI & VERTEILUNG</h3>
        </p>
        <img src="phone.png" width={30} className={styles.Phone} alt="Nr tel" />
        <p className={styles.PhoneNr}>+41787104195</p>
        <p className={styles.PhoneNr2}>+41764554912</p>

        <img src="email.png" width={30} className={styles.Email} />
        <p className={styles.Email1}>ee-druck.ch@hotmail.com</p>
      </footer>
    </div>
  );
}
