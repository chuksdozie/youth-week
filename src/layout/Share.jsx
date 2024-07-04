import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import React from "react";
import styled from "styled-components";

const Share = () => {
  return (
    <BannerContainer>
      <h4>I anticipate this event already</h4>
      <h3>Share with a friend</h3>
      <img
        src="https://ik.imagekit.io/akf2tcskl/Time%20Out/Timeout%20Square_0B9pVBD2u.jpg?updatedAt=1720076316138"
        alt=""
      />

      <PrimaryButton text={"share"} />
      <p>social media icons - set up SEO- LINK TO SHARE</p>
    </BannerContainer>
  );
};

export default Share;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem;
  height: 500px;
  gap: 0.5rem;
  .ctagroup {
    display: flex;
    gap: 1rem;
  }
  img {
    height: 250px;
    border: 3px solid ${colors.primary700};
    border-radius: 5px;
  }
`;
