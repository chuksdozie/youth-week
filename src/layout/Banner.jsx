import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <h4>As an African Talent</h4>
      <h3>Do You Have An Advantage?</h3>
      <p>Let's Find Out Together</p>
      <div className="ctagroup">
        <PrimaryButton text={"Register"} />
        <PrimaryButton text={"Become A Sponsor"} />
      </div>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem;
  height: 500px;
  /* background-image: url("https://picsum.photos/1200"); */
  background-image: url("https://ik.imagekit.io/akf2tcskl/Time%20Out/Timeout%20Square_0B9pVBD2u.jpg?updatedAt=1720076316138");
  background-size: cover;
  background-position: center;
  .ctagroup {
    display: flex;
    gap: 1rem;
  }
`;
