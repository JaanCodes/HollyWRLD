import React from "react";
import Row from "../../components/Row/Row";
import Header from "../../components/Header/Header";
import requests from "../../requests";

const Home = () => {
  return (
    <>
      <Header />
      <Row title={"Originals"} fetchUrl={requests.fetchNetflixOriginals} poster />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default Home;
