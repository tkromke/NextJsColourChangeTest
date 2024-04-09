import type { NextPage } from "next";
import styles from "./gradient-descent-guru-advanced.module.css";

const GradientDescentGuruAdvanced: NextPage = () => {
  return (
    <div className={styles.gradientDescentGuruAdvanced}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.dataAggregatorParent}>
            <div className={styles.dataAggregator}>
              <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
            </div>
            <div className={styles.listComponentParent}>
              <div className={styles.listComponent}>
                <i className={styles.theFastestAnd}>
                  The fastest and simple way to generate growing business
                  solutions with our products
                </i>
              </div>
              <div className={styles.dividerElement}>
                <div className={styles.outputDistributor}>
                  <div className={styles.decisionTree}>
                    <img
                      className={styles.iconSystem}
                      loading="lazy"
                      alt=""
                      src="/icon-system.svg"
                    />
                  </div>
                  <i className={styles.hellodhuhacreativecom}>
                    hello@dhuhacreative.com
                  </i>
                </div>
                <div className={styles.variableHolder}>
                  <div className={styles.sliderControl}>
                    <div className={styles.functionCaller}>
                      <img
                        className={styles.iconslack}
                        loading="lazy"
                        alt=""
                        src="/iconslack.svg"
                      />
                    </div>
                    <i className={styles.joinOurSlack}>
                      Join our slack community
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.treeStructure}>
          <div className={styles.tableComponent}>
            <i className={styles.product}>Product</i>
            <div className={styles.landingPagesParent}>
              <i className={styles.landingPages}>Landing pages</i>
              <i className={styles.pricing}>Pricing</i>
              <i className={styles.benefits}>Benefits</i>
              <i className={styles.features}>Features</i>
            </div>
          </div>
          <div className={styles.graphVisualization}>
            <div className={styles.geometricShapes}>
              <i className={styles.company}>Company</i>
              <i className={styles.about}>About</i>
              <i className={styles.privacyPolicy}>Privacy Policy</i>
              <i className={styles.termsConditions}>{`Terms & Conditions`}</i>
              <i className={styles.partners}>Partners</i>
              <i className={styles.contact}>Contact</i>
            </div>
            <div className={styles.mapVisualization}>
              <i className={styles.resources}>Resources</i>
              <i className={styles.guidesAndResources}>Guides and resources</i>
              <i className={styles.blog}>Blog</i>
              <i className={styles.tools}>Tools</i>
              <i className={styles.support}>Support</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientDescentGuruAdvanced;
