import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ text, onClick, ...props }) => {
  return (
    <Wrapper onClick={onClick} {...props}>
      {text}
    </Wrapper>
  );
};

export default PrimaryButton;

const Wrapper = styled.div`
  color: ${colors.white};
  background-color: ${colors.warning700};
  width: max-content;
  /* max-height: 30px; */
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: ${fontSizes.m};
`;
