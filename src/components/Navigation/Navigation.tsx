import React from "react";
import { motion } from "framer-motion";
import useMobile from "../../utils/useMobile";
import Header from "../Header/Header";

const Navigation = ({ children, ...props }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const onNavOpen = () => setIsNavOpen(true);
  const onNavClose = () => setIsNavOpen(false);

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
    <div>
      {isMobile ? (
        <Header onNavOpen={onNavOpen} onNavClose={onNavClose} />
      ) : null}
      {isNavOpen ? (
        <motion.div
          style={{ ...main } as React.CSSProperties}
          initial={{ x: isMobile ? "-100%" : 0 }}
          animate={{ x: 0 }}
        >
          <div style={{ ...child } as React.CSSProperties}>{children}</div>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Navigation;
