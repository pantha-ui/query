import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { colors } from "../utils/colors";
import { MdClose } from "react-icons/md";

interface ToastProps {
  bg: string;
  color: string;
  duration?: number;
  info: string;
  size?: string;
  id?: any;
}

export const useToast = () => {
  const [items, setItems] = React.useState<ToastProps[]>([]);

  const toast = ({ bg, color, duration, info, size }: ToastProps) => {
    setItems((items) => [
      ...items,
      { bg, color, duration, id: items.length + 1, info, size },
    ]);
  };

  return { toast, items };
};

export const Toast = ({ items }) => {
  return (
    <div style={{ width: "100%" }}>
      {items.map(({ bg, color, info, duration }, index) => {
        return (
          <IndividualToast
            bg={bg}
            color={color}
            info={info}
            duration={duration}
            key={index}
          />
        );
      })}
    </div>
  );
};

export const IndividualToast = ({
  info,
  duration,
  color,
  bg,
  size,
}: ToastProps) => {
  const styles = {
    backgroundColor: colors[bg] || bg,
    color: colors[color] || color,
    padding: "1.5rem 1rem",
    boxSizing: "border-box",
    position: "relative",
    width: size || "100%",
    margin: "0.5rem auto",
  };

  const [visible, setVisible] = React.useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ ...styles } as React.CSSProperties}>
            <div>{info}</div>
            <div
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "0.5rem",
              }}
              onClick={() => setVisible(false)}
            >
              <MdClose size={20} color="white" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
