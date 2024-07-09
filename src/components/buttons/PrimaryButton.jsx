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
  background-color: ${colors.black};
  width: max-content;
  /* max-height: 30px; */
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: ${fontSizes.s};
  cursor: pointer;
`;
