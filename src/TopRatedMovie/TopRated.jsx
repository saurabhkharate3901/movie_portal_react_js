import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { getImageUrl, getTopRatedMovies } from '../api/Api';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './TopRated.module.scss'

function TopRated() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        getTopRatedMovies(page)
        .then((result)=>{
            //console.log("result",result)
            setMovies(result.data.results)
        }).catch((error)=>{
           console.log("Error Msg",error);
        })
    },[page])

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
        <Navbar/>
        <h2>TopRated Movie</h2>
        <div className={styles.main_container}>
        {movies?.map(movie=>(
            <div key={movie.id}>
                <NavLink  to={`/movieDetails/${movie.id}`}>
                   <img src={getImageUrl(movie.poster_path)} alt={movie.title}/>
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

export default TopRated
