import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineLocalActivity, MdOutlineShareLocation } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import EventLineUp from "@/components/EventLineUp";
import Link from "next/link";
import ReactImageGallery from "react-image-gallery";
import { images } from "@/assets/photos";
import { Gallery } from "react-grid-gallery";
import { Carousel } from "react-responsive-carousel";
import DownloadFile from "@/components/DownloadFile";
import Navbar from "@/layout/Navbar";
import Banner from "@/layout/Banner";
import Speakers from "@/layout/Speakers";
import colors from "@/constants/colors";
import Sponsors from "@/layout/Sponsors";
import LuckyDipCorner from "@/layout/LuckyDipCorner";
import Share from "@/layout/Share";
import Footer from "@/layout/Footer";
import CountDown from "@/layout/CountDown";
import DateTime from "@/layout/DateTime";
import MidCTA from "@/layout/MidCTA";
import BannerFix from "@/layout/BannerFix";
import Channel from "@/layout/Channel";
import BannerFixChat from "@/layout/BannerFixChat";

const Home = () => {
  const [countdown, setCountdown] = useState("00:00:00");
  const [countup, setCountup] = useState("00:00:00");
  const [randomNumber, setRandomNumber] = useState(0);
  // const randomNumber = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    const eventDate = new Date("2024-08-08T00:00:00");
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
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      if (distance < 0) {
        clearInterval(interval);
        setCountdown("ENDED");
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
    <Wrapper>
      {/* <DownloadFile /> */}
      <Navbar />
      {/* <Banner /> */}
      {/* <BannerFix /> */}
      <BannerFixChat />
      <DateTime />
      <Speakers />
      <CountDown />
      <MidCTA />
      <LuckyDipCorner />
      <Share />
      <Channel />
      <Sponsors />
      <Footer />
      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdj6TcBRqLrflgezybv_YA4hfrMlYvkIgi9HpXvtw10Qz2Dhw/viewform?embedded=true"
        width="640"
        height="1743"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        sjfkcihkdf,nbjfsmdfnkjsdfnbcmnd
      </iframe> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-container {
    background-color: red;
    padding: 1rem;
    background: url("group-young-black-people.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 50vw rgba(205, 56, 150, 0.7);
    text-align: center;
  }
  .header {
    font-size: 2rem;
    color: whitesmoke;
  }
  .theme {
    font-size: 1.2rem;
    color: whitesmoke;
  }
  .theme-sub {
    font-size: 1.2rem;
    color: whitesmoke;
    margin-top: 1rem;
    font-weight: 600;
  }
  .number {
    font-size: 6.2rem;
    color: whitesmoke;
    margin-top: 1rem;
    font-weight: 600;
  }
  .date {
    font-size: 0.8rem;
    color: whitesmoke;
  }
  .countdown {
    font-size: 2rem;
    color: whitesmoke;
    background-color: rgba(43, 25, 36, 0.6);
    /* padding: 1rem; */
    border-radius: 1rem;
    min-width: 50%;
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 512px) {
      flex-direction: column;
    }
  }
  .line {
    border: 0.1rem solid whitesmoke;
    margin: 2rem 0;
    /* padding: 1rem; */
    width: 80%;
  }
  button {
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    /* margin-top: 5rem; */
    border-radius: 8px;
    border: 0px solid black;
    cursor: pointer;
    width: 200px;
  }
  .venue-container {
    background-color: red;
    padding: 1rem;
    background: url("church.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 50vw rgba(3, 3, 3, 0.9);
    text-align: center;
    cursor: pointer;
    width: 100vw;
  }
  .venue {
    font-size: 2rem;
    color: whitesmoke;
  }
  .theme {
    font-size: 1.2rem;
    color: whitesmoke;
  }
  .countdown {
    font-size: 1.5rem;
    color: whitesmoke;
    background-color: rgba(43, 25, 36, 0.6);
    padding: 2rem;
    border-radius: 1rem;
    min-width: 50%;
    text-align: center;
  }
  .icon {
    color: whitesmoke;
  }
  .info {
    margin: 2rem 0;
    font-size: 1.2rem;
    color: whitesmoke;
    font-style: italic;
  }
  .spacer {
    margin: 2rem 0;
  }
`;
