import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import { event } from "@/constants/event";
import fontSizes from "@/constants/fontSizes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Share = () => {
  return (
    <Wrapper>
      <div className="left">
        <text>Hi</text>
        <img src="/random/hi.svg" alt="" className="rocket" />
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="dot4"></div>
        {/* <text>Days into Event:</text> */}
      </div>
      <div className="right">
        <p className="catch">Time OUT</p>
        <p>
          {`Join us for "Timeout - The Advantage of an African Talent in the Global Tech Industry," a groundbreaking virtual event that celebrates the unique contributions of African talent in the tech sector. This event brings together leading professionals, innovators, and thought leaders from across the globe to discuss and explore the dynamic impact of African talent on the global tech landscape.`}
        </p>
        <p>
          {`By sharing this event, you contribute to a global movement that recognizes and amplifies the voices of African tech talents. Let’s come together to celebrate and empower the next generation of innovators!`}
        </p>

        <PrimaryButton text="Share The Excitement" />
        <img src="/random/empha.svg" alt="" className="empha" />
      </div>
    </Wrapper>
  );
};

export default Share;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
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
      font-size: ${fontSizes.xxxl};
      font-weight: bold;
      width: 250px;
      position: absolute;
      top: 15rem;
      left: 6rem;
      text-underline-offset: 15px;
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-decoration-color: rgba(255, 203, 103, 0.6);
    }
    .rocket {
      width: 350px;
      position: absolute;
      top: 0rem;
      /* right: ; */
      /* bottom: 2rem; */
      left: 9rem;
    }
    .dot1 {
      padding: 0.5rem;
      background-color: rgba(241, 162, 42, 1);
      border-radius: 50%;
      position: absolute;
      top: 5rem;
      left: 5rem;
    }
    .dot2 {
      padding: 0.5rem;
      background-color: rgba(255, 203, 103, 1);
      border-radius: 50%;
      position: absolute;
      top: 8rem;
      left: 3rem;
    }
    .dot3 {
      padding: 0.5rem;
      background-color: rgba(10, 183, 6, 1);
      border-radius: 50%;
      position: absolute;
      top: 12rem;
      left: 6rem;
    }
    .dot4 {
      padding: 0.5rem;
      background-color: rgba(241, 162, 42, 1);
      border-radius: 50%;
      position: absolute;
      top: 10rem;
      left: 9rem;
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
      font-size: ${fontSizes.m};
    }
    .empha {
      width: 50px;
      position: absolute;
      bottom: -0.7rem;
      left: -0.7rem;
    }
    .catch {
      font-weight: 700;
      /* font-style: italic; */
      font-size: ${fontSizes.xl};
    }

    .first {
      background-color: rgba(255, 172, 103, 1);
    }
  }
`;
