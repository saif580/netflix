import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const bgVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const movieTrailer = json.results.find((video) => {
        return video.type === "Trailer";
      });
      dispatch(addTrailerVideo(movieTrailer));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    bgVideo();
  }, []);
};

export default useMovieTrailer;
