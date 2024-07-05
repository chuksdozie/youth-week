import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Sponsors = () => {
  return (
    <Wrapper>
      <h4>Sponsors</h4>
      <p>They made this event possible</p>

      <h1>Logo Parade Comes Here</h1>
      <PrimaryButton text={"Become A Sponsor"} />
      <p>
        Please note that each sub speaker will have a very short speaking slot
        to share their insights.
      </p>
    </Wrapper>
  );
};

export default Sponsors;

const Wrapper = styled.div`
  width: 100%;
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
