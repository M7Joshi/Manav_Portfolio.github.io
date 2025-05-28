"use client";
import { logEvent } from "firebase/analytics";
import { navState } from "@/atoms/NavAtom";
import { soundState } from "@/atoms/SoundAtom";
import { Icon } from "@iconify/react";
import { analytics } from "@/firebase/config";
import { Variants, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useRecoilState, useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "../../styles/components/Navbar.module.scss";
import ThemeToggler from "./ThemeToggler";

type RightProps = {
  mobile: boolean;
};

const listVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const Right: React.FC<RightProps> = ({ mobile }) => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });
  const [navStateValue, setNavState] = useRecoilState(navState);

  useEffect(() => {
    const stopScroll = () => {
      if (mobile && navStateValue.open) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("scroll", stopScroll);
    return () => window.removeEventListener("scroll", stopScroll);
  }, [navStateValue.open, mobile]);

  const navItems = ["about", "skills", "projects", "contact"];

  return (
    <>
      <motion.ul
        variants={listVariants}
        animate={!navStateValue.open && mobile ? "initial" : "animate"}
        className={styles.navbar_right_list}
      >
        {navItems.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className={styles.navbar_right_list_item}
          >
            <Link
              to={item}
              smooth={true}
              duration={600}
              offset={50}
              onClick={() => {
                if (SoundActive) playClick();
                setNavState((prev) => ({ ...prev, open: false }));

                analytics.then((instance) => {
                  if (instance) {
                    const label = `${item.charAt(0).toUpperCase() + item.slice(1)} Navbar`;
                    instance && logEvent(instance, label);
                  }
                });
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}

        <motion.li variants={itemVariants} className={styles.navbar_right_list_item}>
          <a
            href="/Docs/resume.pdf"
            target="_blank"
            onClick={() => {
              if (SoundActive) playClick();
              setNavState((prev) => ({ ...prev, open: false }));

              analytics.then((instance) => {
                if (instance) {
                  logEvent(instance, "Resume Navbar");
                }
              });
            }}
          >
            Resume
          </a>
        </motion.li>

        <motion.li variants={itemVariants} className={styles.navbar_right_list_item}>
          <ThemeToggler />
        </motion.li>
      </motion.ul>

      {mobile && (
        <div className={styles.navbar_right_links}>
          <div className={styles.navbar_right_links_line}></div>
          <div className={styles.navbar_right_links_container}>
            <a
              className={styles.navbar_right_links_container_link}
              href="https://github.com/M7Joshi"
              target="_blank"
              aria-label="github"
              onClick={() => {
                if (SoundActive) playClick();
                analytics.then((instance) => {
                  if (instance) {
                    logEvent(instance, "Github Navbar Links");
                  }
                });
              }}
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href="https://www.linkedin.com/in/manav-joshisde/"
              target="_blank"
              aria-label="linkedin"
              onClick={() => {
                if (SoundActive) playClick();
                analytics.then((instance) => {
                  if (instance) {
                    logEvent(instance, "LinkedIn Navbar Links");
                  }
                });
              }}
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href="mailto:joshimanav0717@gmail.com"
              target="_blank"
              aria-label="email"
              onClick={() => {
                if (SoundActive) playClick();
                analytics.then((instance) => {
                  if (instance) {
                    logEvent(instance, "Email Navbar Links");
                  }
                });
              }}
            >
              <Icon icon="mi:email" />
            </a>
          </div>
          <div className={styles.navbar_right_links_line}></div>
        </div>
      )}
    </>
  );
};

export default Right;
