import { useQuery } from "react-query";
import { getComingSoon, getNowPlaying, getPopular } from "../utils/Api";
import { IMovieResponse } from "../utils/Interface";
import styled from "styled-components";

import Movies from "../components/Movies";
import Loading from "../components/Loading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NowPlaying() {
  const { isLoading, isError, data } = useQuery<IMovieResponse>(
    "nowPlayingMovies",
    getNowPlaying
  );
  const movie = data?.results;
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <Container>
      <Movies movie={movie} />
    </Container>
  );
}
