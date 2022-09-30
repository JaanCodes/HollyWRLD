import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import "./details.css";

const MovieDetails = () => {
  const { movieId, movieType } = useParams();
  const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
  const [details, setDetails] = useState();
  const videoSource = details?.videos?.results[0]?.key ? (
    <iframe
      className="details__video--src"
      src={`https://www.youtube.com/embed/${details?.videos?.results[0]?.key}`}
    ></iframe>
  ) : (
    <img
      className="details__poster"
      src={`https://image.tmdb.org/t/p/original/${details?.poster__path || details?.backdrop__path}`}
      loading="lazy"
    />
  );

  useEffect(() => {
    async function fetchDetails() {
      const request = await axios.get(
        `${
          movieType === "movies"
            ? `/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos%2Cimages`
            : `/tv/${movieId}?api_key=${API_KEY}&append_to_response=videos%2Cimages`
        }`
      );
      setDetails(request.data);
    }
    fetchDetails();
  }, []);

  return (
    <section
      id="details__section"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${details?.backdrop_path || details?.poster_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="movie__details">
        <div className="details__info">
          <h1 className="details__title">{details?.title || details?.name || details?.original_name}</h1>
          <p className="details__description">{details?.overview}</p>
        </div>
        <div className="details__trailer">{videoSource}</div>
      </div>
      <div className="header--xfade header--fadeTop"></div>
      <div className="header--xfade header--fadeBottom"></div>
      <div className="details__black-filter"></div>
    </section>
  );
};

export default MovieDetails;
