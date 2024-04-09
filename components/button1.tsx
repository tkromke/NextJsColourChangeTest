import type { NextPage } from "next";
import styles from "./button1.module.css";

const Button1: NextPage = () => {
  return (
    <div className={styles.button}>
      <div className={styles.box}>
        <div className={styles.yourBusinessEmailWrapper}>
          <i className={styles.yourBusinessEmail}>Your business email</i>
        </div>
        <Button className={styles.button1}>
          <i className={styles.getStarted}>Get Started</i>
        </Button>
      </div>
    </div>
  );
};

export default Button1;
