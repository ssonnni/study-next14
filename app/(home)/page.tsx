import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  return await fetch(API_URL)
    .then((res) => res.json())
    .catch((err) => err);
};

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <>
      <div>Hompage</div>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </>
  );
};
export default HomePage;
