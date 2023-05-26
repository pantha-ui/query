import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { MotionStyle, motion } from "framer-motion";
import { colors } from "../../utils/colors";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "solid" | "outlined";
  color: string;
  bg: string;
  leftIcon?: JSX.Element;
  rightKey?: number;
  isCentered?: boolean;
  size: string;
  onClick?: () => void;
  onHover?: {
    color?: string;
    bg?: string;
    scale?: number;
    duration?: number | string;
  };
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  let variant: MotionStyle | undefined;

  switch (props.variant) {
    case "outlined":
      variant = {
        padding: "0.85rem 0.5rem",
        borderWidth: 1.5,
        borderRadius: "0.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: colors[props.bg] || props.bg,
        backgroundColor: "transparent",
        borderColor: colors[props.bg] || props.bg,
        outline: "none",
        width: props.size,
      };
      break;

    default:
      variant = {
        padding: "0.85rem 0.5rem",
        borderWidth: 0,
        borderRadius: "0.25rem",
        transition: "0.25s",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: colors[props.color] || props.color,
        backgroundColor: colors[props.bg] || props.bg,
        width: props.size,
      };
      break;
  }

  return (
    <motion.button
      style={{
        ...variant,
      }}
      whileHover={{
        scale: props.onHover?.scale || 1,
        transition: { duration: props.onHover?.duration || 0.2 },
        color: props.onHover
          ? (props.onHover.color && colors[props.onHover?.color]) ||
            props.onHover?.color
          : null,
        backgroundColor: props.onHover
          ? (props.onHover.bg && colors[props.onHover?.bg]) || props.onHover?.bg
          : null,
      }}
      onClick={props.onClick}
    >
      {props?.leftIcon ? props.leftIcon : null}
      {children}
      {props.rightKey ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <MdKeyboardArrowRight size={props.rightKey} />
        </div>
      ) : null}
    </motion.button>
  );
};

export default Button;
