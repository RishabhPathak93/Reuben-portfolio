import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Reuben Soares</h1>
        <p className={styles.description}>
          Current student looking to join the workforce to
          gain real-world experience. Ability to complete
          tasks on time in both individual and team
          settings. Dependable and reliable, ready to learn
          and grow with your council.
        </p>
        {/* Updated button for downloading the resume */}
        <a href="/Resume.pdf" download className={styles.resumeBtn}>
  Download Resume
</a>

      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
