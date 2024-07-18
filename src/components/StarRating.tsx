import styled from "styled-components";
import { IStarRatingProps } from "../utils/Interface";

const MovieStarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const FillStarIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const EmptyStarIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const RatingSpan = styled.div`
  font-size: 12px;
  margin-top: 2px;
  margin-left: 2px;
  margin-right: 2px;
`;

export default function StarRating({ rate, count }: IStarRatingProps) {
  return (
    <MovieStarContainer>
      {[2, 4, 6, 8, 10].map((item) => {
        return (rate as number) > item ? (
          <FillStarIcon
            key={item}
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            ></path>
          </FillStarIcon>
        ) : (
          <EmptyStarIcon
            key={item}
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            ></path>
          </EmptyStarIcon>
        );
      })}
      {count === 0 ? (
        <RatingSpan>No ratings yet. Check back soon!</RatingSpan>
      ) : (
        <>
          <RatingSpan>{Math.round((rate as number) * 10) / 10}</RatingSpan>
          <RatingSpan> ( {count} votes )</RatingSpan>
        </>
      )}
    </MovieStarContainer>
  );
}
