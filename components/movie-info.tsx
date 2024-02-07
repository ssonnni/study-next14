import { API_URL } from "../app/(home)/page";

const getMovieDetail = async (id: string) => {
  return await fetch(`${API_URL}/${id}`)
    .then((res) => res.json())
    .catch((err) => err);
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovieDetail(id);
  return (
    <>
      <h6>{JSON.stringify(movie)}</h6>
    </>
  );
};

export default MovieInfo;
