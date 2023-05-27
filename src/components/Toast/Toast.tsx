import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const Toast = () => {
  const styles = {
    backgroundColor: "red",
    color: "white",
    padding: "1rem",
    transition: "height 2s",
  };

  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ ...styles }}>This is an example of a notification.</div>
          <div
            style={{
              position: "absolute",
              right: ".75rem",
              top: ".75rem",
            }}
            onClick={() => setVisible(false)}
          >
            <MdClose size={20} color="white" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
