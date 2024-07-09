import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
import { speakers } from "@/constants/event";
import fontSizes from "@/constants/fontSizes";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import React from "react";
import styled from "styled-components";

const Speakers = () => {
  const thisArray = ["Dozie", "Jones", "Ike", "Abisola", "Tochi"];
  const isMobile = useMatchMediaQuery(device.mobile);
  return (
    <Wrapper isMobile={isMobile}>
      <h4>Meet Our Speakers</h4>
      <p>The Visionaries Leading the Charge in Global Tech</p>

      {speakers.map((item) => (
        <div key={item} className="itemgroup">
          <div className="picArea">
            <img src={item?.pic} alt="" />
            <p className="name">{item?.name}</p>
          </div>

          <div>
            <p className="name">{item?.title}</p>
            {item?.company && <p className="company">{item?.company}</p>}
            <p>{item?.details}</p>
            {/* <p>daoa sdkajsdcas djashdas</p> */}
          </div>
        </div>
      ))}
      <PrimaryButton text={"Become A Sub-Speaker"} />
      <p className="subnote">
        Please note that each sub speaker will have a very short speaking slot
        to share their insights.
      </p>
    </Wrapper>
  );
};

export default Speakers;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* align-self: center; */
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  background-color: rgba(241, 162, 42, 0.08);
  padding: 1rem;
  border-radius: 10px;
  .subnote {
    font-size: ${fontSizes.xs};
    margin-top: 1rem;
    color: ${colors.gray500};
  }
  h4 {
    color: ${colors.gray500};
    font-size: ${fontSizes.xl};
    font-weight: bold;
    font-size: ${fontSizes.xl};
    margin: 1rem 0 0rem;
  }
  p {
    color: ${colors.gray500};
    /* font-size: ${fontSizes.xl}; */
    /* font-weight: bold; */
    font-size: ${fontSizes.s};
    margin: 0.2rem 0 1rem;
    text-align: ${({ isMobile }) => (isMobile ? "center" : "left")};
  }
  /* height: 500px; */
  .itemgroup {
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
    justify-content: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    align-items: ${({ isMobile }) => (isMobile ? "center" : "center")};
    padding: ${({ isMobile }) => (isMobile ? "2rem" : "0")};
    gap: 1rem;
    width: ${({ isMobile }) => (isMobile ? "90%" : "90%")};
    margin: 1rem 0;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;

    .name {
      font-weight: 600;
      font-size: ${fontSizes.m};
      margin-bottom: 0.5rem;
      text-align: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    }
    .company {
      font-style: italic;
      font-weight: 300;
      font-size: ${fontSizes.s};
      /* margin-bottom: 0.5rem; */
      text-align: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    }
    img {
      height: 120px;
      width: 120px;
      background-color: brown;
      border-radius: 50%;
      /* border: 5px solid rgba(241, 162, 42, 0.6); */
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* background-color: orange; */
      font-size: ${fontSizes.s};
      padding: 0.5rem;
    }
    .picArea {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background-color: orange; */
      font-size: ${fontSizes.s};
      padding: 0.5rem;
    }
  }
`;
