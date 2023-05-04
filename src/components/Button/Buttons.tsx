import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default Buttons;
