import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <img src="" alt="" />
      logo comes here
      <PrimaryButton text={"Register"} />
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 1rem;
`;
