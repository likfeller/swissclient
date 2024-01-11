import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Flyer from "./components/FLYER";
import Menu from "./components/Menu";
import Werbung from "./components/Werbung";
import Zeitung from "./components/Zeitung";
import Karten from "./components/Karten";
import Zeitschriften from "./components/Zeitschriften";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "1",
    "try",
  ],

  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Something else to be added",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "ALSO THERE",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  ["mmm here too", "State", "Hooks (e.g., useEffect())", "Dynamic rendering"],
  [
    "fuck you",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

export default function Home() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const tabs = [
    { component: <Flyer content={content[0]} />, label: "FLYER" },
    { component: <Menu content={content[1]} />, label: "MENU" },
    { component: <Werbung content={content[2]} />, label: "WERBUNG" },
    { component: <Zeitung content={content[3]} />, label: "ZEITUNG" },
    {
      component: <Zeitschriften content={content[4]} />,
      label: "ZEITSCHRIFTEN",
    },
    { component: <Karten content={content[5]} />, label: "KARTEN" },
  ];

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
                  WERBUNG
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
                  {content[activeContentIndex].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
