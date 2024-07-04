import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Speakers = () => {
  return (
    <Wrapper>
      <h4>Meet Our Speakers</h4>
      <p>The Visionaries Leading the Charge in Global Tech</p>

      <h1>Dozie</h1>
      <h1>Jones</h1>
      <h1>Ike</h1>
      <h1>Abisola</h1>
      <h1>Tochi</h1>
      <PrimaryButton text={"Become A Sub-Speaker"} />
      <p>
        Please note that each sub speaker will have a very short speaking slot
        to share their insights.
      </p>
    </Wrapper>
  );
};

export default Speakers;

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
