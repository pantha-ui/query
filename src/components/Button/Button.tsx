import React from "react";
import styles from "./Button.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  colorScheme?: "green" | "yellow" | "black" | "red";
  variant?: "primary" | "secondary";
  colorCode: {
    primary: string;
    secondary: string;
  };
  leftIcon?: JSX.Element;
  rightKey?: number;
  isCentered?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // const _style: React.CSSProperties = style || {
  //   width: "100%",
  //   height: "2.5rem",
  //   fontSize: "0.9rem",
  //   backgroundColor:
  //     variant === "primary" ? colorCode.secondary : "transparent",
  //   color: colorCode.primary,
  //   borderWidth: 1,
  //   borderColor: colorCode.secondary,
  // };

  // switch (colorScheme) {
  //   case "green":
  //     _style.backgroundColor = "green";
  //     _style.color = "white";
  //     break;

  //   case "yellow":
  //     _style.backgroundColor = "yellow";
  //     _style.color = "black";
  //     break;

  //   default:
  //     break;
  // }

  let variant;

  switch (props.variant) {
    case "primary":
      variant = styles.primary;
      break;

    default:
      variant = styles.primary;
      break;
  }

  return (
    <button className={variant}>
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
    </button>
  );
};

export default Button;
