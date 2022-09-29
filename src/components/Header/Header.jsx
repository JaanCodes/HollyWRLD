import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import requests from "../../requests";
import "./header.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="header__content">
        <h1 className="header__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="header__buttons">
          <button className="header__button" onClick={() => navigate(`/movies/${movie.id}`)}>
            Play
          </button>
          <button className="header__button cursor--not-allowed">Favourites</button>
        </div>
        <h3 className="header__description">{truncate(movie?.overview, 200)}</h3>
      </div>
      <div className="header--xfade header--fadeTop"></div>
      <div className="header--xfade header--fadeBottom"></div>
    </header>
  );
};

export default Banner;
