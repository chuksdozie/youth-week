import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";
import { Alegreya_Sans } from "next/font/google";

const alg = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Banner = () => {
  return (
    <BannerContainer className={alg.className}>
      <p>As an African Talent in Tech</p>
      <h3>Do You Have An Advantage?</h3>
      <p className="sub">let&apos;s find out together</p>
      <div className="ctagroup">
        <PrimaryButton text={"Register"} />
        <PrimaryButton text={"Become A Sponsor"} />
      </div>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  /* font-family: ${alg}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.softBackground};
  /* font-weight: 400; */
  padding: 1rem;
  height: 750px;
  width: 100%;
  /* background-image: url("https://picsum.photos/1200"); */
  /* background-image: url("https://ik.imagekit.io/akf2tcskl/Time%20Out/Timeout%20Square_0B9pVBD2u.jpg?updatedAt=1720076316138"); */
  /* background-size: cover; */
  /* background-position: center; */
  color: ${colors.gray900};
  .ctagroup {
    display: flex;
    gap: 1rem;
  }
  .sub {
    font-style: italic;
    margin: 0 0 1rem 0;
  }
  p {
    font-size: ${fontSizes.xxl};
  }
  h3 {
    font-size: ${fontSizes?.xxxl};
    text-align: center;
  }
`;
