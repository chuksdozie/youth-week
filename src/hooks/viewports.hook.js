import device from "@/constants/breakpoints";
import { useState, useEffect } from "react";

export const useMatchMediaQuery = (mediaQuery = device.tablet) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    setMatches(window.matchMedia(mediaQuery).matches);
  }, []);
  useEffect(() => {
    function handleResize() {
      setMatches(window.matchMedia(mediaQuery).matches);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return matches;
};
