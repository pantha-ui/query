import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMobile from "../../utils/useMobile";
import Header from "../Header/Header";

const Navigation = ({ children, ...props }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const [isMobile] = useMobile(768);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavOpen]);

  const overlay = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    background: isNavOpen ? "rgba(0,0,0,0.5)" : "transparent",
    zIndex: 5,
  };

  const main = {
    width: props.size,
    height: "100%",
    backgroundColor: props.backgroundColor || "#153953",
    position: isMobile ? "fixed" : "relative",
    margin: 0,
    inset: 0,
    zIndex: 20,
  };

  return isMobile ? (
    <div style={{ ...overlay } as React.CSSProperties}>
      <Header toggleNav={toggleNav} />
      <AnimatePresence>
        {isNavOpen ? (
          <motion.div
            style={{ ...main } as React.CSSProperties}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  ) : (
    <motion.div
      style={{ ...main } as React.CSSProperties}
      initial={{ x: isMobile ? "-100%" : 0 }}
      animate={{ x: 0 }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default Navigation;
