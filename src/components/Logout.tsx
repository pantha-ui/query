import React from "react";
import styled from "styled-components";

const LogoutTag = styled.div`
  justify-self: flex-end;
`;

const Logout = ({ children }) => {
  return <LogoutTag>{children}</LogoutTag>;
};

export default Logout;
