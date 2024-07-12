import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import { links } from "@/constants/links";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Sponsors = () => {
  return (
    <Wrapper>
      <h4>Our Sponsors</h4>
      <p>They made this event possible</p>
      <div className="scrollContent">
        <img src="/sponsors/jaynas.jpeg" alt="" className="sponsor" />
        <img src="/sponsors/devchuks.png" alt="" className="sponsor" />
        {/* <h1>Logo Parade Comes Here</h1> */}
        {/* <h1>Logo Parade Comes Here</h1> */}
      </div>
      <Link href={links.sponsor} target="_blank">
        <PrimaryButton text={"Become A Sponsor"} />
      </Link>
    </Wrapper>
  );
};

export default Sponsors;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
  margin: 3rem 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;

  h1 {
    background-color: red;
    margin: 0 1rem;
  }
  h4 {
    color: ${colors.gray500};
    font-size: ${fontSizes.xl};
  }
  p {
    color: ${colors.gray500};
    font-size: ${fontSizes.m};
    margin: 0 0 1rem;
  }
  .scrollContent {
    display: flex;
    justify-content: center;
    /* display: inline-block; */
    /* padding-left: 100%; Start the animation off-screen */
    /* animation: scroll-left 30s linear infinite; */
    margin: 2rem 0;
    gap: 1rem;
    .sponsor {
      width: 70px;
      border-radius: 10px;
    }
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
    -100% {
      transform: translateX(500%);
    }
  }
`;
