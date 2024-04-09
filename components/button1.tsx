import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./button1.module.css";

export type Button1Type = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Button1: NextPage<Button1Type> = ({ propAlignSelf, propWidth }) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={styles.button} style={buttonStyle}>
      <div className={styles.box}>
        <div className={styles.yourBusinessEmailWrapper}>
          <i className={styles.yourBusinessEmail}>Your business email</i>
        </div>
        <Button
          className={styles.button1}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#6241d4",
            borderRadius: "6px",
            "&:hover": { background: "#6241d4" },
            width: 150,
            height: 50,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Button1;
