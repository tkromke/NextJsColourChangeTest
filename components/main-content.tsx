import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./main-content.module.css";

const MainContent: NextPage = () => {
  return (
    <header className={styles.mainContent}>
      <div className={styles.mainContentChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <nav className={styles.mainContentInner}>
        <nav className={styles.pricingParent}>
          <i className={styles.pricing}>Pricing</i>
          <i className={styles.resourcesCenter}>Resources Center</i>
          <i className={styles.about}>About</i>
          <i className={styles.contact}>Contact</i>
        </nav>
      </nav>
      <div className={styles.loginWrapper}>
        <i className={styles.login}>Login</i>
      </div>
      <Button
        className={styles.button}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#9d9d9d",
          borderRadius: "6px",
          "&:hover": { background: "#9d9d9d" },
          width: 122,
          height: 50,
        }}
      >
        Sign Up
      </Button>
    </header>
  );
};

export default MainContent;
