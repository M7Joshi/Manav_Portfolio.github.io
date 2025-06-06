"use client";
import { aboutData } from "@/db/main";
import { Variants, motion } from "framer-motion";
import React from "react";
import styles from "../../styles/components/About.module.scss";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.about_title}>{aboutData.title}</h2>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className={styles.about_container}
      >
        {aboutData.cards.map((entry, index) => (
          <motion.div
            key={index}
            variants={childrenVariants}
            className={styles.about_container_card}
          >
            <h3 className={styles.about_container_card_title}>
              {entry.title}
            </h3>
            <p className={styles.about_container_card_text}>{entry.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.about_circle1}></div>
    </section>
  );
};

export default About;
