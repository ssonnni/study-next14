import { Metadata } from "next";
import MovieVideos from "../../../components/movie-viedos";
import MovieInfo from "../../../components/movie-info";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "movie Detail",
};

const MovieDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <h1>movie detail</h1>
      <Suspense fallback={<h3>movie info loading</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>movie video loading</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
};
export default MovieDetail;
