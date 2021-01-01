import React, { useState, useEffect } from "react";
import { Container, Icon } from "./_backToTopStyle";
import arrowTopIcon from "./assets/up-arrow.svg";
import { getElDistanceToTop } from "../../utils";

function BackToTop() {
  const [displayIcon, setDisplayIcon] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const distance = getElDistanceToTop("back-to-top");
    setDisplayIcon(distance > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container id="back-to-top" display={displayIcon} onClick={scrollToTop}>
      <Icon src={arrowTopIcon} />
    </Container>
  );
}

export default BackToTop;
