import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getImageUrl, searchMovies } from '../api/Api';
import { Typography } from '@mui/material';
import styles from './searchPage.module.scss'

function SearchPage() {
    const {query} = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
     
    useEffect(() => {
        searchMovies(query, page).then((result) => {
          setMovies(result.data.results);
        }).catch((error) => {
          
        });
      }, [query, page]);

      const handlePreviousPage = () =>{
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
          }
    }
   
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }


  return (
    <>
    <div className={styles.main_container}>
        {movies?.map(movie=>(
            <div key={movie?.id}>
                <NavLink  to={`/movieDetails/${movie?.id}`}>
                   <img src={getImageUrl(movie?.poster_path)} alt={movie?.title}/>
                </NavLink>
             
              <h3>{movie?.title}</h3>
        
             <p>Rating: {movie?.vote_average}</p>
            </div>
        ))}
    </div>
    <div>
     <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
     <button onClick={handleNextPage}>Next</button>
     </div>
     </>
  )
}

export default SearchPage
