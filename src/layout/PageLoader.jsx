import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import { speakers } from "@/constants/event";
import fontSizes from "@/constants/fontSizes";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import React from "react";
import { FaCode } from "react-icons/fa";
import styled from "styled-components";

const PageLoader = () => {
  const thisArray = ["Dozie", "Jones", "Ike", "Abisola", "Tochi"];
  const isMobile = useMatchMediaQuery(device.mobile);
  return (
    <Wrapper isMobile={isMobile}>
      <FaCode color={colors.warning600} size={100} className="throbbing" />
    </Wrapper>
  );
};

export default PageLoader;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary300};
  .throbbing {
    display: inline-block;
    width: 70px;
    height: 70px;
    /* background-color: #123abc; */
    border-radius: 50%;
    animation: throb 1.5s infinite;
  }

  @keyframes throb {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.7;
    }
  }
`;
