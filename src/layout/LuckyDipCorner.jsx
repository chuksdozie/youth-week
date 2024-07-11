import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";

const LuckyDipCorner = () => {
  const isMobile = useMatchMediaQuery(device.mobile);
  const [randomNumber, setRandomNumber] = useState(0);
  return (
    <Wrapper $isMobile={isMobile}>
      <div className="back"></div>
      <img src="/random/baloons.png" alt="" className="baloon" />
      <h4>Lucky Corner</h4>
      <p>There is some fun also at the event.</p>
      <p>Get ready for some fun! Someone is going to be lucky at the event.</p>
      <div className="lucky">
        <img src="/random/lucky.png" alt="" style={{ height: "100%" }} />
        <text className="number">{randomNumber}</text>
      </div>
      {/* <FaGamepad className="icon" size={70} color="whitesmoke" />
      <text className="theme">Pick a Random Number</text> */}

      <PrimaryButton
        onClick={() => setRandomNumber(Math.floor(Math.random() * 200) + 1)}
        text={"Generate New Number"}
      />
    </Wrapper>
  );
};

export default LuckyDipCorner;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(241, 186, 42, 0.37);
  padding: 2rem;
  /* height: 500px; */
  border-radius: 20px;
  margin: 6rem 0;
  position: relative;
  h4 {
    color: ${colors.gray500};
    font-size: ${fontSizes.xl};
  }
  p {
    color: ${colors.gray500};
    font-size: ${fontSizes.s};
    text-align: ${({ $isMobile }) => ($isMobile ? "center" : "center")};
  }
  .back {
    background-color: rgba(255, 234, 194, 0.5);
    position: absolute;
    top: -1rem;
    padding: 1rem;
    width: 95%;
    border-radius: 20px;
  }
  .baloon {
    /* background-color: rgba(255, 234, 194, 0.5); */
    position: absolute;
    top: ${({ $isMobile }) => ($isMobile ? "-11rem" : "-10rem")};
    width: ${({ $isMobile }) => ($isMobile ? "230px" : "280px")};
    left: 0;
    /* width: 280px; */
  }
  .lucky {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: ${({ $isMobile }) => ($isMobile ? "280px" : "350px")};
    width: ${({ $isMobile }) => ($isMobile ? "280px" : "350px")};
    /* width: 350px; */
    /* background-color: red; */
    margin: 3rem 0;
    .number {
      position: absolute;
      /* right: 140px; */
      /* top: 100px; */
      color: ${colors.gray500};
      /* font-size: ${fontSizes.xxxl}; */
    }
  }
  .ctagroup {
    display: flex;
    gap: 1rem;
  }
`;
