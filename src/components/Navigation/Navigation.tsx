import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMobile from "../../utils/useMobile";
import Header from "../Header/Header";
import { colors } from "../../utils/colors";

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
    display: isNavOpen ? "block" : "none",
  };

  const main = {
    width: props.size,
    height: "100vh",
    backgroundColor: colors[props.color] || props.color || "#153953",
    position: isMobile ? "fixed" : "sticky",
    zIndex: 20,
    alignSelf: "flex-start",
    top: 0,
  };

  return isMobile ? (
    <div>
      <Header
        toggleNav={toggleNav}
        color={props.color}
        title={props.title}
        titleIcon={props.titleIcon}
      />
      <div style={{ ...overlay } as React.CSSProperties}>
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
    </div>
  ) : (
    <motion.div style={{ ...main } as React.CSSProperties}>
      {children}
    </motion.div>
  );
};

export default Navigation;
