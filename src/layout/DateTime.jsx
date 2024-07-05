import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import { event } from "@/constants/event";
import fontSizes from "@/constants/fontSizes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DateTime = () => {
  return (
    <Wrapper>
      <div className="left">
        <text>Event Itenerary</text>
        {/* <text>Days into Event:</text> */}
      </div>
      <div className="right">
        <div>{event?.date}</div>
        <div>{event?.time}</div>
        <div>{event?.datem}</div>
        <div>{event?.datex}</div>
      </div>
    </Wrapper>
  );
};

export default DateTime;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-flow: 1fr 3fr; */
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.warning700}; */
  padding: 1rem;
  gap: 2rem;
  /* height: 500px; */
  padding: 4rem 0.5rem 2rem;
  .left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text {
      color: ${colors.gray500};
      font-size: ${fontSizes.xl};
      font-weight: bold;
    }
  }
  .right {
    gap: 1rem;
    display: flex;
    background-color: ${colors.softBackground};
    width: 100%;
    justify-content: center;
    padding: 1.5rem;
    div {
      color: ${colors.gray900};
      font-size: ${fontSizes.m};
      font-weight: 500;
      background-color: ${colors.gray200};
      width: 200px;
      height: 50px;
      margin: 0 0.5rem;
      padding: 0.5rem;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
