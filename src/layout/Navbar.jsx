import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const isMobile = useMatchMediaQuery(device.mobile);
  return (
    <NavContainer $isMobile={isMobile}>
      <img
        src="devchuks.png"
        alt=""
        style={{ height: isMobile ? "40px" : "50px" }}
      />

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
    right: 250px;
    height: 150px;
    display: ${({ $isMobile }) => $isMobile && "none"};
  }
`;
