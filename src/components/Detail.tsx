import { motion } from "framer-motion";
import styled from "styled-components";
import { getMovie, makeBgPath } from "../utils/Api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IMovieDetail } from "../utils/Interface";
import { useState } from "react";
import StarRating from "./StarRating";

const MovieImg = styled(motion.img)`
  display: block;
  position: absolute;
  width: 540px;
  height: auto;
  user-select: none;
  object-fit: fill;
`;

const Overlay = styled.div`
  position: absolute;
  width: 360px;
  height: 303.75px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(21, 21, 21, 1));
`;

const DetailContainer = styled.div`
  position: absolute;
  margin-top: 270px;
  margin-left: 10px;
  width: 340px;
  height: auto;
  color: white;
`;

const MovieTitle = styled.div`
  width: 240px;
  font-size: 36px;
  font-weight: bold;
`;

const MovieDetail = styled.div`
  font-size: 14px;
  font-weight: 100;
`;

export default function Detail() {
  const [onLoaded, setOnLoaded] = useState(false);
  const onLoad = () => setOnLoaded(true);
  const { movieId } = useParams();
  const { isLoading, isError, data } = useQuery<IMovieDetail>(
    ["popularMovies", movieId],
    () => getMovie(movieId)
  );
  console.log(data);
  return (
    <>
      <MovieImg src={`${makeBgPath(data?.backdrop_path)}`} />
      <Overlay />
      <DetailContainer>
        <MovieTitle>{data?.title}</MovieTitle>
        <StarRating rate={data?.vote_average} count={data?.vote_count} />
        <MovieDetail>release : {data?.release_date}</MovieDetail>
        <MovieDetail>
          runtime : {Math.floor((data?.runtime as number) / 60)} hours{" "}
          {(data?.runtime as number) % 60} minutes
        </MovieDetail>
        <MovieDetail>{data?.overview}</MovieDetail>
      </DetailContainer>
    </>
  );
}
