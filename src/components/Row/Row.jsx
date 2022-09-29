import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./row.css";
import { useNavigate } from "react-router";

const Row = ({ title, fetchUrl, poster }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  let navigate = useNavigate();

  return (
    <div className="row">
      <div className="row__title">
        <h2>{title}</h2>
        <h3>Scroll --&gt;</h3>
      </div>
      <div className="row__posters">
        {movies?.map((movie) => {
          return (
            <img
              key={movie?.id}
              onClick={() =>
                navigate(
                  title === "Originals"
                    ? `/tv/${movie.id}`
                    : `${movie.media_type == "tv" ? "/tv/" + movie.id : "/movies/" + movie.id}`
                )
              }
              className={`row__poster ${poster && "row__poster--large"}`}
              src={`https://image.tmdb.org/t/p/original/${
                poster ? movie?.poster_path : movie?.backdrop_path || movie?.poster_path
              }`}
              loading="lazy"
              alt={movie?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
