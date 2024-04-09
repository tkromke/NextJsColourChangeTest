import type { NextPage } from "next";
import Button1 from "./button1";
import styles from "./formula-factory.module.css";

const FormulaFactory: NextPage = () => {
  return (
    <div className={styles.formulaFactory}>
      <div className={styles.bg} />
      <div className={styles.equationEditorParent}>
        <div className={styles.equationEditor}>
          <div className={styles.readyToGetStartedParent}>
            <h1 className={styles.readyToGet}>Ready to get started?</h1>
            <i className={styles.theFastestAnd}>
              The fastest and simple way to generate growing business solutions
              with our products
            </i>
          </div>
          <Button1 propAlignSelf="unset" propWidth="480px" />
        </div>
        <div className={styles.patternWrapper}>
          <div className={styles.pattern}>
            <div className={styles.patternChild} />
            <div className={styles.patternItem} />
            <div className={styles.patternElement} />
            <div className={styles.patternElement1} />
            <div className={styles.frameParent}>
              <div className={styles.patternElementParent}>
                <div className={styles.patternElement2} />
                <div className={styles.frameGroup}>
                  <div className={styles.patternElementGroup}>
                    <div className={styles.patternElement3} />
                    <div className={styles.patternElement4} />
                  </div>
                  <div className={styles.patternElement5} />
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.patternElementWrapper}>
                  <div className={styles.patternElement6} />
                </div>
                <div className={styles.finiteDifferenceFinder}>
                  <div className={styles.patternElementContainer}>
                    <div className={styles.patternElement7} />
                  </div>
                  <div className={styles.patternElement8} />
                </div>
                <div className={styles.patternElement9} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.separto} />
    </div>
  );
};

export default FormulaFactory;
