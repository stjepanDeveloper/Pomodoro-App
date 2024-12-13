import React from "react";
import { ReactComponent as Tomato } from "../assets/svg/Tomato.svg";
import Timer from "./Timer";
import styles from "./SvgGallery.module.scss";

const SvgGallery: React.FC = () => {
  return (
    <div className={styles["tomato-container"]}>
      <div className={styles["tomato-wrapper"]}>
        <Tomato className={styles["tomato-svg"]} />

        <div className={styles["timer-container"]}>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default SvgGallery;
