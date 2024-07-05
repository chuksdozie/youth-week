import PrimaryButton from "@/components/buttons/PrimaryButton";
import device from "@/constants/breakpoints";
import colors from "@/constants/colors";
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

      {thisArray.map((item) => (
        <div key={item} className="itemgroup">
          <img src="" alt="" />
          <div>
            <p className="name">{item}</p>
            <p>
              daoa sdkajsdcas djashdas jakdcasdasnddkad adcajbsdcksfc sjdfsdfdck
              cdahsdasdd xabshdxajsmdx bahksdVxna msDKhxgehansdmxchegadfcmh
              kavdc sdmchsdfvc dfv cskdbfvcskjdfs fdj sjodfs{" "}
            </p>
            <p>daoa sdkajsdcas djashdas</p>
          </div>
        </div>
      ))}
      <PrimaryButton text={"Become A Sub-Speaker"} />
      <p>
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
  width: 95%;
  background-color: rgba(241, 162, 42, 0.08);
  padding: 1rem;
  border-radius: 10px;
  h4 {
    color: ${colors.gray500};
    font-size: ${fontSizes.xl};
    font-weight: bold;
    font-size: ${fontSizes.xxl};
    margin: 1rem 0 0rem;
  }
  p {
    color: ${colors.gray500};
    /* font-size: ${fontSizes.xl}; */
    /* font-weight: bold; */
    font-size: ${fontSizes.m};
    margin: 0.2rem 0 1rem;
    text-align: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
  }
  /* height: 500px; */
  .itemgroup {
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
    justify-content: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    align-items: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    padding: ${({ isMobile }) => (isMobile ? "2rem" : "0")};
    gap: 1rem;
    width: ${({ isMobile }) => (isMobile ? "90%" : "60%")};
    margin: 1rem 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    .name {
      font-weight: 600;
      font-size: ${fontSizes.l};
      margin-bottom: 0.5rem;
      text-align: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
    }
    img {
      height: 150px;
      width: 150px;
      background-color: brown;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: ${fontSizes.s};
    }
  }
`;
