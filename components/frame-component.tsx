import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.patternParent}>
      <img className={styles.patternIcon} alt="" src="/pattern@2x.png" />
      <div className={styles.illustrations}>
        <div className={styles.illustrationsChild} />
        <div className={styles.instagramParent}>
          <i className={styles.instagram}>Instagram</i>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.instagramIcon}
              loading="lazy"
              alt=""
              src="/044instagram.svg"
            />
          </div>
        </div>
        <i className={styles.socialDivider}>12,62</i>
        <div className={styles.illustrationsInner}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.socialIconPlaceholdersParent}>
            <div className={styles.socialIconPlaceholders} />
            <div className={styles.socialIconPlaceholders1} />
          </div>
        </div>
        <div className={styles.footerBackground} />
      </div>
      <div className={styles.illustrationsWrapper}>
        <div className={styles.illustrations1}>
          <div className={styles.illustrationsItem} />
          <div className={styles.logicBranch}>
            <i className={styles.dataAnalytics}>Data Analytics</i>
            <div className={styles.outputCollector}>
              <div className={styles.kParent}>
                <i className={styles.k}>90k</i>
                <i className={styles.k1}>60k</i>
                <i className={styles.k2}>30k</i>
                <i className={styles.k3}>10k</i>
                <i className={styles.chartLabelItems}>0</i>
              </div>
              <div className={styles.labelLinkerParent}>
                <div className={styles.labelLinker}>
                  <div className={styles.labelLinkerChild} />
                  <div className={styles.sequenceController}>
                    <div className={styles.sequenceControllerChild} />
                    <div className={styles.fillProperty}>
                      <div className={styles.fillPropertyChild} />
                      <div className={styles.seriesProcessor}>
                        <i className={styles.k4}>48k</i>
                        <i className={styles.visitor}>Visitor</i>
                      </div>
                      <div className={styles.dataMapping}>
                        <img
                          className={styles.dataMappingChild}
                          loading="lazy"
                          alt=""
                          src="/group-87.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.frameParent}>
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="/group-82.svg"
                      />
                      <div className={styles.sizeAdjustor}>
                        <img
                          className={styles.sizeAdjustorChild}
                          loading="lazy"
                          alt=""
                          src="/polygon-2.svg"
                        />
                        <div className={styles.sizeAdjustorItem} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
              </div>
            </div>
          </div>
          <div className={styles.dataStack}>
            <div className={styles.bufferManager}>
              <i className={styles.mar}>Mar</i>
              <i className={styles.apr}>Apr</i>
              <i className={styles.may}>May</i>
              <i className={styles.jun}>Jun</i>
              <i className={styles.jul}>Jul</i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.illustrations2}>
        <div className={styles.rectangleDiv} />
        <div className={styles.dataTree}>
          <div className={styles.binarySearchTree}>
            <i className={styles.salesStats}>Sales Stats</i>
            <div className={styles.redBlackTree}>
              <img
                className={styles.redBlackTreeChild}
                loading="lazy"
                alt=""
                src="/group-83.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.linkedList}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild5} />
            <div className={styles.frameChild6} />
          </div>
        </div>
      </div>
      <div className={styles.priorityQueue}>
        <div className={styles.binaryHeap}>
          <div className={styles.illustrations3}>
            <div className={styles.illustrationsChild1} />
            <img className={styles.slack1Icon} alt="" src="/079slack-1.svg" />
            <div className={styles.quickSort}>
              <i className={styles.totalSubscribe}>Total Subscribe</i>
              <i className={styles.subscribeLabel}>61.000</i>
            </div>
          </div>
        </div>
        <div className={styles.selectionSort}>
          <div className={styles.illustrations4}>
            <div className={styles.illustrationsChild2} />
            <i className={styles.dailyVisitor}>Daily Visitor</i>
            <i className={styles.visitorLabel}>800+</i>
          </div>
          <div className={styles.heapSort}>
            <div className={styles.illustrations5}>
              <div className={styles.illustrationsChild3} />
              <div className={styles.bucketSortWithCounting}>
                <i className={styles.revenueGrowth}>Revenue Growth</i>
                <div className={styles.dataProcessor}>
                  <i className={styles.daily}>Daily</i>
                </div>
              </div>
              <div className={styles.outputAggregator}>
                <img
                  className={styles.outputAggregatorChild}
                  loading="lazy"
                  alt=""
                  src="/group-80.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
