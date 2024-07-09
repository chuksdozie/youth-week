import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";
import { Alegreya_Sans } from "next/font/google";
import Image from "next/image";

const alg = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Banner = () => {
  return (
    <BannerContainer className={alg.className}>
      {/* <p>As an African Talent in Tech</p>
      <h3>Do You Have An Advantage?</h3>
      <p className="sub">let&apos;s find out together</p>
      <div className="ctagroup">
        <PrimaryButton text={"Register"} />
        <PrimaryButton text={"Become A Sponsor"} />
      </div> */}
      {/* <div> */}
      <img className="item2" src="/bannerImages/5.svg" alt="" />
      <img className="item3" src="/bannerImages/3.svg" alt="" />
      <img className="item4" src="/bannerImages/4.svg" alt="" />
      <img className="item5" src="/bannerImages/6.svg" alt="" />
      <img className="item6" src="/bannerImages/7.svg" alt="" />
      <img className="item7" src="/bannerImages/8.svg" alt="" />
      <img className="item8" src="/bannerImages/9.svg" alt="" />
      <img className="item9" src="/bannerImages/10.svg" alt="" />
      <img className="text1" src="/bannerImages/time.svg" alt="" />
      <img className="text2" src="/bannerImages/out.svg" alt="" />
      {/* <p className="text1">Time</p>
      <p className="text2">Out</p> */}

      {/* </div> */}
      {/* <div className="item3">hi</div>
      <div className="item4">hi</div>
      <div className="item5">hi</div>
      <div className="item6">hi</div>
      <div className="item7">hi</div>
      <div className="item8">hi</div>
      <div className="item9">hi</div> */}
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  /* font-family: ${alg}; */
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(8, 5rem);
  /* background-color: orange; */
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items: center;
  grid-gap: 1rem;
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
  .item1 {
    background-color: red;
    height: 100%;
  }
  .item2 {
    display: flex;
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 7;
    border-radius: 10px;
  }
  .item3 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 5;
    border-radius: 10px;
  }
  .item4 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 5;
    grid-row-end: 8;
    border-radius: 10px;
  }
  .item5 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 4;
    grid-row-end: 8;
    border-radius: 10px;
  }
  .item6 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 8;
    grid-column-end: 10;
    grid-row-start: 3;
    grid-row-end: 8;
    border-radius: 10px;
  }
  .item7 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 2;
    grid-row-end: 6;
    border-radius: 10px;
  }
  .item8 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 8;
    border-radius: 10px;
  }
  .item9 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 12;
    grid-column-end: 14;
    grid-row-start: 3;
    grid-row-end: 7;
    border-radius: 10px;
  }
  .text1 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
    border-radius: 10px;
  }
  .text2 {
    /* background-color: #bfff00; */
    height: 100%;
    width: 100%;
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 3;
    border-radius: 10px;
  }
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
