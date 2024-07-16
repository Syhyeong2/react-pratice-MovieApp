import { useQuery } from "react-query";
import { getPopular, makeBgPath, makeImagePath } from "../utils/Api";
import { IMovie, IMovieResponse } from "../utils/Interface";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 10px;
  max-width: 480px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const MoviesCard = styled.div`
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

const MoviesTitle = styled.div`
  text-align: center;
  font-size: 13px;
  margin-top: 5px;
`;

const BtnVariants = {
  hover: {
    scale: 1.1,
    y: -15,
  },
};

export default function Main() {
  const { isLoading, isError, data } = useQuery<IMovieResponse>(
    "popularMovies",
    getPopular
  );
  const movie = data?.results;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <BodyContainer>
      <Container>
        {movie?.map((movie, index) => (
          <MoviesCard key={index}>
            <Link to="/coming-soon">
              <MoviesImg
                src={`${makeBgPath(movie.poster_path)}`}
                variants={BtnVariants}
                whileHover="hover"
                animate="end"
              />
            </Link>
            <MoviesTitle>{movie.title}</MoviesTitle>
          </MoviesCard>
        ))}
      </Container>
    </BodyContainer>
  );
}
