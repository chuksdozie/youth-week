import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";

const LuckyDipCorner = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  return (
    <Wrapper>
      <h4>Lucky Dip Corner</h4>
      <p>There is some fun also at the event.</p>
      <p>Put this number while registering for this event.</p>
      <FaGamepad className="icon" size={70} color="whitesmoke" />
      <text className="theme">Pick a Random Number</text>
      <text className="number">{randomNumber}</text>
      <PrimaryButton
        onClick={() => setRandomNumber(Math.floor(Math.random() * 200) + 1)}
        text={"Generate New Number"}
      />
    </Wrapper>
  );
};

export default LuckyDipCorner;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem;
  height: 500px;
  .ctagroup {
    display: flex;
    gap: 1rem;
  }
`;
