import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-full absolute top-0 left overflow-x-hidden z-0">
      <iframe
        className="w-full aspect-video object-fill"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?hd=1&fs=0&si=66-vDOfZHtons-Pf&autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&loop=1&rel=0&playlist=${trailerVideo?.key}&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

    </div>
  );
};

export default VideoBackground;
