import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountDown = () => {
  const [countdown, setCountdown] = useState("00:00:00");
  const [countup, setCountup] = useState("00:00:00");
  const isMobile = useMatchMediaQuery(device.mobile);
  // const randomNumber = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    const eventDate = new Date("2024-08-10T10:00:00");
    const now = new Date().getTime();
    const distance = eventDate - now;
    const interval = setInterval(() => {
      const distance = eventDate - new Date().getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // setCountdown(`${days}D ${hours}H ${minutes}M ${seconds}S`);
      setCountdown({ days, hours, minutes, seconds });
      if (distance < 0) {
        clearInterval(interval);
        setCountdown("00D:00H:00M:00S");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const eventDate = new Date("2023-05-08T00:00:00");
    let startTime = new Date().getTime();
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = currentTime - eventDate;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountup(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      startTime = currentTime;
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper $isMobile={isMobile}>
      <div className="left">
        <text>COUNTDOWN </text>
        {/* <text>Days into Event:</text> */}
      </div>
      <div className="right">
        <div className="first">
          <div>{countdown?.days}</div>
          <p>Days</p>
        </div>
        <div className="first">
          <div>{countdown?.hours}</div>
          <p>Hours</p>
        </div>
        <div className="first">
          <div>{countdown?.minutes}</div>
          <p>Minutes</p>
        </div>
        <div className="first">
          <div>{countdown?.seconds}</div>
          <p>Seconds</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CountDown;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  /* flex-direction: column; */
  /* flex-flow: 1fr 3fr; */
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 26, 2, 1);
  padding: 1rem;
  gap: 2rem;
  margin: 5rem 0;
  /* height: 500px; */
  padding: 2rem 0.5rem;
  .left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text {
      color: ${colors.white};
      font-size: ${({ $isMobile }) => ($isMobile ? fontSizes.m : fontSizes.xl)};
      font-weight: ${({ $isMobile }) => ($isMobile ? "300" : "700")};
    }
  }
  .right {
    gap: 1rem;
    display: flex;
    .first {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      div {
        color: rgba(52, 26, 2, 1);
        font-size: ${({ $isMobile }) =>
          $isMobile ? fontSizes.xxl : fontSizes.xxxl};
        font-weight: bold;
        background-color: rgba(241, 162, 42, 1);
        width: ${({ $isMobile }) => ($isMobile ? "50px" : "120px")}; //120px;
        margin: 0 0.5rem;
        padding: 0.5rem;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .ctagroup {
    display: flex;
    gap: 1rem;
  }

  p {
    color: ${colors.white};
    font-size: ${({ $isMobile }) => ($isMobile ? fontSizes.xs : fontSizes.m)};
  }
`;
