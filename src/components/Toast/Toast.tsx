import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { colors } from "../../utils/colors";

interface Props {
  bg: string;
  color: string;
  duration?: number;
  info: string;
  isToastOpen: boolean;
}

const Toast = ({ info, duration, color, bg, isToastOpen }: Props) => {
  const styles = {
    backgroundColor: colors[bg] || bg,
    color: colors[color] || color,
    padding: "1rem",
  };

  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    if (duration !== undefined || null || 0)
      setTimeout(() => {
        setVisible(false);
      }, duration);
  }, []);

  return isToastOpen ? (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ ...styles }}>{info}</div>
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
  ) : null;
};

export default Toast;
