import React from "react";
import Title from "../Title/Title";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ ...props }) => {
  const { toggleNav } = props;

  const main = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: props?.backgroundColor || "#153953",
  };

  return (
    <div style={{ ...main }}>
      <Title leftIcon={<FcGoogle size={20} />} color="white">
        LOGO
      </Title>
      <AiOutlineMenu color="white" onClick={() => toggleNav()} />
    </div>
  );
};

export default Header;
