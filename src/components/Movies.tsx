import { motion } from "framer-motion";
import styled from "styled-components";
import { makeBgPath } from "../utils/Api";
import { MoviesProps } from "../utils/Interface";
import { Link } from "react-router-dom";
import { start } from "repl";

const Container = styled(motion.div)`
  margin-top: 10px;
  max-width: 480px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const MoviesCard = styled(motion.div)`
  display: flex;
  width: 130px;
  height: 230px;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

const MoviesImg = styled(motion.img)`
  width: 130px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const MoviesTitle = styled(motion.div)`
  text-align: center;
  font-size: 13px;
  margin-top: 5px;
  color: white;
`;

const ImgVars = {
  hover: {
    scale: 1.1,
    y: -15,
  },
};

const ContainerVars = {
  end: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const MoviesVars = {
  start: { scale: 0.3, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
  },
};

export default function Movies({ movie }: MoviesProps) {
  return (
    <Container variants={ContainerVars} initial="start" animate="end">
      {movie?.map((movie, index) => (
        <MoviesCard key={index} variants={MoviesVars}>
          <Link to="/coming-soon">
            <MoviesImg
              src={`${makeBgPath(movie.poster_path)}`}
              variants={ImgVars}
              whileHover="hover"
              animate="end"
            />
          </Link>
          <MoviesTitle>{movie.title}</MoviesTitle>
        </MoviesCard>
      ))}
    </Container>
  );
}
