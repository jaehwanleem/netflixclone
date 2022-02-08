// 굉장히 중요하다 useEffect 로 데이타 fetch 하는것

import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            ); // [..., ..., ...,  ....]

            return request;
        }
        fetchData();
    }, []);

    console.log(movie);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`, // movie 사이에 ? 가 있는 이유는 데이타가없을때 에러를 발생시키지말고 그냥 스무스하게 넘어가도록 만든거다
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className='banner__buttons'>
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(`${movie?.overview}`, 200)}

                </h1>
            </div>


            <div className="banner__fadeBottom" />
        </header>);



}

export default Banner;
