import MovieInfo from "../../../learn-nextjs14/app/components/movie-info";
import MovieVideos from "../../../learn-nextjs14/app/components/movie-videos";

import { API_URL } from "../../../learn-nextjs14/app/(home)/page";
import { Suspense } from "react";

async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideo(id) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function movies({ params: { id } }) {
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie video...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <img src={movie.poster_path} alt="" />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}
