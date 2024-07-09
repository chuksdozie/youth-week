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

const BannerFixChat = () => {
  return (
    <BannerContainer className={alg.className}>
      <img src="/random/banner.svg" alt="" style={{ width: "100%" }} />
    </BannerContainer>
  );
};

export default BannerFixChat;

const BannerContainer = styled.div`
  /* font-family: ${alg}; */
  display: flex;
  /* display: grid; */
  /* grid-template-columns: repeat(14, 1fr); */
  /* grid-template-rows: repeat(8, 5rem); */
  /* background-color: orange; */
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  /* background-color: ${colors.softBackground}; */
  /* font-weight: 400; */
  /* padding: 1rem; */
  /* height: 750px; */
  width: 100%;
  /* background-image: url("https://picsum.photos/1200"); */
  /* background-image: url("https://ik.imagekit.io/akf2tcskl/Time%20Out/Timeout%20Square_0B9pVBD2u.jpg?updatedAt=1720076316138"); */
  /* background-size: cover; */
  /* background-position: center; */
  color: ${colors.gray900};
  .imgDiv {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .writeup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5rem;
    p {
      width: 600px;
      text-align: left;
      font-size: ${fontSizes.xxl};
      color: ${colors.gray500};
    }
    h3 {
      width: 580px;
      text-align: left;
      font-size: ${fontSizes.xxxl};
      color: ${colors.gray500};
      margin-bottom: 2rem;
    }
  }
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
    /* height: 350px; */
    width: 50%;
  }
  .item6 {
    /* background-color: #bfff00; */
    /* height: 450px; */
    width: 50%;
  }
  .item7 {
    /* background-color: #bfff00; */
    /* height: 550px; */
    width: 50%;
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
