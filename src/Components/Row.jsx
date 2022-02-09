import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "../Assets/css/Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}){
    const [movies,setMovies] = useState([]);

    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return(
        <section className='titles__row'>
        <div className='row'>
            <h2 className='categories__title'>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie =>(
                    <img 
                    key={movie.id}
                    className='row__poster'
                    src={`${baseUrl}${movie.backdrop_path}`} 
                    alt={`${baseUrl}${movie.name}`}></img>
                ))}
            </div>
        </div>
        </section>
    )
}

export default Row;