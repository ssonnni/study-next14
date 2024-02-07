import { API_URL } from "../app/(home)/page";

const getMovieDetaiVideo = async (id: string) => {
  // throw new Error("error test");
  return await fetch(`${API_URL}/${id}/video`)
    .then((res) => res.json())
    .catch((err) => err);
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getMovieDetaiVideo(id);
  return (
    <>
      <h6>{JSON.stringify(videos)}</h6>
    </>
  );
};

export default MovieVideos;
