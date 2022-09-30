import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";
import exploreMovies from "../../assets/exploreMovies.svg";
import "./explore.css";

const Explore = () => {
  const [searchTermMovies, setSearchTermMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
  let navigate = useNavigate();

  async function fetchSearchTermData() {
    const searchTermRequest = await axios.get(`/search/multi?api_key=${API_KEY}&page=1&query=${searchTerm}`);
    setSearchTermMovies(searchTermRequest.data.results);
  }

  return (
    <div id="explore">
      <div className="search__bar">
        <h1 className="search__bar--title">Searches for:</h1>
        <input
          className="explore__search--input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && fetchSearchTermData()}
        />
      </div>
      <div className="explore__movies">
        {searchTermMovies ? (
          searchTermMovies?.map((movie) => {
            return movie?.poster_path || movie?.backdrop_path ? (
              <img
                key={movie?.id}
                onClick={() => navigate(`${movie.media_type == "tv" ? "/tv/" + movie.id : "/movies/" + movie.id}`)}
                className={"explore__poster"}
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                loading="lazy"
                alt={movie?.name}
              />
            ) : (
              ""
            );
          })
        ) : (
          <img className="explore__img" loading="lazy" src={exploreMovies} alt="" />
        )}
      </div>
    </div>
  );
};

export default Explore;
