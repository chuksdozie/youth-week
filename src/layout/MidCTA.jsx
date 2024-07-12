import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import { event } from "@/constants/event";
import fontSizes from "@/constants/fontSizes";
import { links } from "@/constants/links";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MidCTA = () => {
  const isMobile = useMatchMediaQuery(device.mobile);
  return (
    <Wrapper $isMobile={isMobile}>
      <div className="left">
        <text>Get enough insights to refuel</text>
        <img src="/random/rocket.svg" alt="" className="rocket" />
        {/* <text>Days into Event:</text> */}
      </div>
      <div className="right">
        <p>
          Is there any advantage to being an African talent in the global tech
          industry? What unique perspectives do African tech professionals bring
          to the table? How does the diversity and innovation from the African
          continent shape global technological advancements? Could the
          challenges faced by African tech talents actually be their greatest
          strengths? What untapped potential lies within the African tech
          ecosystem that the world has yet to fully recognize?
        </p>
        <p className="catch">Let&apos;s find out together.</p>
        <Link href={links.register} target="_blank">
          <PrimaryButton text="Book Event - It's Free" />
        </Link>
        <img src="/random/empha.svg" alt="" className="empha" />
      </div>
    </Wrapper>
  );
};

export default MidCTA;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.warning700}; */
  padding: 1rem;
  gap: 2rem;
  /* width: 100%; */
  /* height: 500px; */
  padding: 4rem 0.5rem 6rem;
  position: relative;
  .left {
    display: flex;
    /* flex-direction: column; */
    gap: 1rem;
    width: 100%;
    text {
      color: ${colors.gray500};
      font-size: ${({ $isMobile }) =>
        $isMobile ? fontSizes.xl : fontSizes.xxl};
      font-weight: bold;
      width: ${({ $isMobile }) => ($isMobile ? "200px" : "250px")}; //250px;
    }
    .rocket {
      width: 150px;
      position: absolute;
      top: ${({ $isMobile }) => ($isMobile ? "1rem" : "9rem")};
      left: ${({ $isMobile }) => ($isMobile ? "14rem" : "15rem")};
      /* right: ; */
      /* bottom: 2rem; */
      /* left: 15rem; */
    }
  }
  .right {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    /* background-color: ${colors.softBackground}; */
    width: 100%;
    justify-content: center;
    padding: 1.5rem;
    position: relative;
    p {
      color: ${colors.gray500};
      font-weight: 300;
      font-size: ${({ $isMobile }) => ($isMobile ? fontSizes.s : fontSizes.m)};
    }
    .empha {
      width: 50px;
      position: absolute;
      bottom: -0.7rem;
      left: -0.7rem;
    }
    .catch {
      font-weight: 600;
      font-style: italic;
      font-size: ${fontSizes.l};
    }

    .first {
      background-color: rgba(255, 172, 103, 1);
    }
  }
`;
