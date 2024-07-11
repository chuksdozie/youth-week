import PrimaryButton from "@/components/buttons/PrimaryButton";
import colors from "@/constants/colors";
import fontSizes from "@/constants/fontSizes";
import React, { useState } from "react";
import styled from "styled-components";
import { Alegreya_Sans } from "next/font/google";
import Image from "next/image";
import { useMatchMediaQuery } from "@/hooks/viewports.hook";
import device from "@/constants/breakpoints";
import PageLoader from "./PageLoader";

const alg = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const BannerFixChat = () => {
  const isMobile = useMatchMediaQuery(device.mobile);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BannerContainer className={alg.className}>
      {isLoading && (
        <div className="loader">
          <PageLoader />
        </div>
      )}
      <Image
        // x
        src="/random/banner.svg"
        alt="Banner"
        // fill
        width={isMobile ? 800 : 1920}
        height={isMobile ? 400 : 1080}
        style={{ objectFit: "cover", position: "relative", width: "100%" }}
        // loading="eager"
        onLoad={() => setIsLoading(false)}
      />
    </BannerContainer>
  );
};

export default BannerFixChat;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  width: 100%;
  color: ${colors.gray900};
  position: relative;
  .loader {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
