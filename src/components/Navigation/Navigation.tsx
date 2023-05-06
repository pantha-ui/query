import React from "react";
import { motion } from "framer-motion";
import useMobile from "../../utils/useMobile";

const Navigation = ({ children, ...props }) => {
  const [isMobile] = useMobile(768);

  const main = {
    width: props.size,
    height: "100%",
    backgroundColor: props.backgroundColor || "#153953",
    position: isMobile ? "fixed" : "relative",
    margin: 0,
    inset: 0,
    zIndex: 10,
  };

  const child = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return (
    <motion.div
      style={{ ...main } as React.CSSProperties}
      initial={{ x: isMobile ? 0 : 0 }}
    >
      <div style={{ ...child } as React.CSSProperties}>{children}</div>
    </motion.div>
  );
};

export default Navigation;
