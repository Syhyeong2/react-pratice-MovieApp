import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-top: 18px;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategorySpan = styled(motion.div)`
  color: white;
  font-weight: bolder;
  font-size: 16px;
  text-decoration: none;
  padding: 8px;
`;

const CategoryDot = styled(motion.div)`
  position: absolute;
  top: 55px;
  width: 5px;
  height: 5px;
  background-color: #ff5757;
  border-radius: 100%;
`;

const SpanVars = {
  hover: {
    textShadow: "0 0 5px #fff, 0 0 10px #fff",
  },
};

export default function Header() {
  const { pathname } = useLocation();
  const mainMatch = pathname === "/" || pathname.startsWith("/movies");
  const comingSoonMatch = pathname.startsWith("/coming-soon");
  const nowPlayingMatch = pathname.startsWith("/now-playing");

  return (
    <HeaderContainer>
      <Category>
        <Link to="/" style={{ textDecoration: "none" }}>
          <CategorySpan variants={SpanVars} whileHover="hover">
            POPULAR
          </CategorySpan>
        </Link>
        {mainMatch ? <CategoryDot layoutId="dot" /> : null}
      </Category>
      <Category>
        <Link to="/coming-soon" style={{ textDecoration: "none" }}>
          <CategorySpan variants={SpanVars} whileHover="hover">
            COMING SOON
          </CategorySpan>
        </Link>
        {comingSoonMatch ? <CategoryDot layoutId="dot" /> : null}
      </Category>
      <Category>
        <Link to="/now-playing" style={{ textDecoration: "none" }}>
          <CategorySpan variants={SpanVars} whileHover="hover">
            NOW PLAYING
          </CategorySpan>
        </Link>
        {nowPlayingMatch ? <CategoryDot layoutId="dot" /> : null}
      </Category>
    </HeaderContainer>
  );
}
