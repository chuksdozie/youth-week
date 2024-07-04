import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h4>CTA'S</h4>
      <h4>REGISTER</h4>
      <h4>BECOME A SUB SPEAKER</h4>
      <h4>BECOME A SUB-SPEAKER</h4>
      <h4>Social Email Platforms</h4>
      <h4>FeedBack</h4>
      <h4>copyright - DEvchuks bla bla bla 2024</h4>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.warning700};
  padding: 1rem;
  /* height: 500px; */
  padding: 2rem 0.5rem;
  .ctagroup {
    display: flex;
    gap: 1rem;
  }
`;
