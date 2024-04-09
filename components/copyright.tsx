import type { NextPage } from "next";
import styles from "./copyright.module.css";

const Copyright: NextPage = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.bg} />
      <div className={styles.separator} />
      <div className={styles.growthlyAllRightReservedParent}>
        <i className={styles.growthlyAllRight}>
          © 2020 Growthly. All Right Reserved
        </i>
        <div className={styles.bxbxlInstagramAltParent}>
          <img
            className={styles.bxbxlInstagramAltIcon}
            loading="lazy"
            alt=""
            src="/bxbxlinstagramalt.svg"
          />
          <img
            className={styles.akarIconstwitterFill}
            loading="lazy"
            alt=""
            src="/akariconstwitterfill.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            loading="lazy"
            alt=""
            src="/akariconslinkedinfill.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
