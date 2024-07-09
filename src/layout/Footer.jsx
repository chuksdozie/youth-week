import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import React from "react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  const isMobile = useMatchMediaQuery(device.mobile);
  return (
    <Wrapper $isMobile={isMobile}>
      <div>
        <p>Book Event</p>
        <p>Become a Sub-Speaker</p>
        <p>Become a Sponsor</p>
      </div>
      <div>
        <p>Give a Feedback</p>
        <p>Join Dev Chuks Whatsapp Channel 🎉</p>
      </div>
      <div>
        <span>
          <p>
            <FaWhatsapp size={25} className="icon" />
            <FaTiktok size={25} className="icon" />
          </p>
        </span>
        <h6>&copy; 2024 Dev Chuks. All rights reserved.</h6>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: ${({ $isMobile }) => $isMobile && "column"};
  align-items: ${({ $isMobile }) => ($isMobile ? "flex-start" : "center")};
  /* flex-direction: ${({ $isMobile }) => $isMobile && "column"}; */
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;
  /* background-color: ${colors.warning700}; */
  background-color: rgba(52, 26, 2, 1);
  padding: 1rem;
  /* height: 500px; */
  padding: 2rem 0.5rem;
  color: ${colors.white};
  div {
    margin: 0 1rem;
    /* width: 450px; */
  }
  p {
    font-size: ${fontSizes.m};
    margin: 1rem 0;
    :hover {
      cursor: pointer;
      color: ${colors.warning200};
    }
  }
  h6 {
    font-weight: 300;
  }
  span {
    margin: 1rem 0;
    .icon {
      margin: 0 0.2rem;
      :hover {
        cursor: pointer;
        color: ${colors.warning200};
      }
    }
  }

  .ctagroup {
    display: flex;
    gap: 1rem;
  }
`;
