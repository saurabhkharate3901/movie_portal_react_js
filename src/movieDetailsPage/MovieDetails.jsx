import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getImageUrl, getMovieCast, getMovieDetail } from '../api/Api'
import styles from "./MovieDetails.module.scss"

function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState();
    const [cast, setCast] = useState();

    useEffect(() => {
        getMovieDetail(id)
            .then((result) => {
                setMovie(result.data)
            }).catch((error) => {
                console.log("Error while featching single movie details", error)
            });

        getMovieCast(id)
            .then((result) => {
                setCast(result.data.cast);
                console.log("result", result)
            })
            .catch((error) => {
                console.error('Error fetching movie cast:', error);
            });

    }, [id])

    return (
        <div>
            <h1>{movie?.title}</h1>
            <div className={styles.main_container}>
                <img src={getImageUrl(movie?.poster_path)} alt={movie?.title} />
            </div>
            <p><strong>OverView :</strong><br></br>{movie?.overview || 'No overview available'}</p>
            <p><strong>Release Date:</strong> {movie?.release_date || 'N/A'}</p>
            <p><strong>Rating:</strong> {movie?.vote_average || 'N/A'}</p>
        
                <h1>Cast</h1>
                <div className={styles.main_container}>
                    {cast?.map((member) => (
                        <div key={movie?.cast_id}>
                            <img src={getImageUrl(member.profile_path)} alt={member.name} />
                            <p>{member.name}</p>
                            <p><strong>Character:</strong> {member.character}</p>
                        </div>
                    ))}
                
                </div>
            
        </div>

    )
}

export default MovieDetails
