import {useEffect, useState} from "react";
import "./Movies.css";

const Movies = () => {
    const url: string = "http://localhost:8080/movie/all";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className={"movies-container"}>
            {movies.map(movie => (
                <div key={movie?.id} className={"single-movie-container"}>
                    <h1>{movie?.name}</h1>
                    <p>Release Year: {movie?.releaseYear}</p>
                </div>
            ))}
        </div>
    )
}

export default Movies;