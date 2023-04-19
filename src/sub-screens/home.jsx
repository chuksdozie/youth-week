import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineLocalActivity, MdOutlineShareLocation } from "react-icons/md";
import EventLineUp from "@/components/EventLineUp";
import Link from "next/link";

const Home = () => {
  const [countdown, setCountdown] = useState("00:00:00");

  useEffect(() => {
    const eventDate = new Date("2023-05-08T00:00:00");
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
        setCountdown("EXPIRED");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {/* Home */}
      <div className="header-container">
        {/* with background image */}
        <h1 className="header">AYF National Youth Week</h1>
        <text className="theme">Theme: Born Identity (Jer. 1: 5)</text>
        <div className="line"></div>
        <div className="countdown">
          <text>Time to Event:</text>
          <text>{countdown}</text>
          <Link href={"https://forms.gle/WyNgX65CaPYdiPjMA"} target="_blank">
            <button>Register</button>
          </Link>
        </div>
        <text ">Mon. May 8th - Sun. 14th 2023</text>
      </div>
      <div className="venue-container">
        {/* with background image */}
        <div className="spacer"></div>
        <MdOutlineShareLocation className="icon" size={70} color="whitesmoke" />
        <text className="theme">
          St. Matthew&apos;s Anglican Church, Nkpogwu
        </text>
        <text className="theme">Port Harcourt</text>
        <div className="spacer"></div>
        <MdOutlineLocalActivity className="icon" size={70} color="whitesmoke" />
        <text className="theme">Activities for the Week</text>
        <EventLineUp />
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #130c00;

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
  .date {
    font-size: 1rem;
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
