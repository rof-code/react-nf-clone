import React from 'react';
import Row from '../Components/Row';
import requests from '../requests';
import Banner from "../Components/Banner";
import Header from '../Components/Header';
import "../Assets/css/Home.css";

export default function Home() {
  return (
    <>
    <div className="Home">
        <Header/>
        <Banner/>
        <section className='titles__row'
            style={{
                position:"relative",
                marginTop: "-100px"
            }}
        >
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
        <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies}></Row>
        </section>
    </div>
    </>
  );
}
