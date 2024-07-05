import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <img src="devchuks.png" alt="" style={{ height: "50px" }} />

      <PrimaryButton text={"Book Event - It's Free"} />
      <img src="spotlight.png" alt="spotlight" className="spotlight" />
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 1rem;
  position: relative;
  .spotlight {
    position: absolute;
    top: 0;
    right: 150px;
  }
`;
