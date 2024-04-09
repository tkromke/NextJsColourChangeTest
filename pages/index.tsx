import type { NextPage } from "next";
import MainContent from "../components/main-content";
import Button1 from "../components/button1";
import FrameComponent from "../components/frame-component";
import Copyright from "../components/copyright";
import FormulaFactory from "../components/formula-factory";
import GradientDescentGuruAdvanced from "../components/gradient-descent-guru-advanced";
import styles from "./index.module.css";

const CITestHomepage: NextPage = () => {
  return (
    <div className={styles.ciTestHomepage}>
      <MainContent />
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.weHelpAnyBusinessToGetAnParent}>
              <h1 className={styles.weHelpAny}>
                We help any business to get analytics and sales marketing
              </h1>
              <i className={styles.theFastestAnd}>
                The fastest and simple way to generate growing business
                solutions with our products
              </i>
            </div>
            <div className={styles.buttonParent}>
              <Button1 />
              <i className={styles.weWillNot}>
                *we will not disseminate your email and so you avoid spam
              </i>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.businessNumberParent}>
              <i className={styles.businessNumber}>350+</i>
              <div className={styles.over500BusinessPoweredWithWrapper}>
                <i className={styles.over500Business}>
                  Over 500 business powered with us
                </i>
              </div>
            </div>
            <div className={styles.ratingStarsParent}>
              <i className={styles.ratingStars}>4.8</i>
              <i className={styles.ratingOnGoogle}>
                Rating on google play and app store
              </i>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <FrameComponent />
        </div>
      </section>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Copyright />
      <section className={styles.chartCreator}>
        <FormulaFactory />
        <GradientDescentGuruAdvanced />
      </section>
    </div>
  );
};

export default CITestHomepage;
