import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { Typography } from '@mui/material'
import { getImageUrl, getPopularMovies } from '../api/Api'
import { NavLink, useParams } from 'react-router-dom'
import styles from './HomePage.module.scss'

function HomePage() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPopularMovies(page)
            .then((result) => {
                //console.log("result",result)
                setMovies(result.data.results)
            }).catch((error) => {
                console.log("Error Msg", error);
            })
    }, [page])

    //console.log("movies", movies)
    
    const handlePreviousPage = () =>{
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
          }
    }
   
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }


    return (
        <div>
            <Navbar />
            <h2>Popular Movie</h2>
            {/* <h1> Popular Movie</h1> */}
           <div className={styles.main_container}>
             
            {movies?.map(movie => (
                <div key={movie.id}>
                    <NavLink to={`/movieDetails/${movie.id}`}>
                        <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
                    </NavLink>

                    <h3>{movie.title}</h3>
                    <p>Rating: {movie.vote_average}</p>

                </div>
            ))}

            </div>
            <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
}

export default HomePage
