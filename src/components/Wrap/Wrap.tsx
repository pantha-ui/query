import React from "react";
import useMobile from "../../utils/useMobile";
import Header from "../Header/Header";
import { motion } from "framer-motion";

const Wrap = ({ children }) => {
  const [isMobile] = useMobile(768);

  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  };

  return isMobile ? (
    <div style={{ ...main } as React.CSSProperties}>
      <Header />
      <motion.div initial={{ x: "100%" }}>{children}</motion.div>
    </div>
  ) : (
    <div style={{ ...main } as React.CSSProperties}>{children}</div>
  );
};

export default Wrap;
