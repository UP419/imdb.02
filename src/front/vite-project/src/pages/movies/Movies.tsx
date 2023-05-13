import "./Movies.css";
import useFetch from "../../hooks/useFetch.tsx";

interface Movie {
    id: number
    name: string
    releaseYear: number
}

const Movies = () => {
    const url: string = "http://localhost:8080/movies/all";
    const [data, errorMessage] = useFetch(url);

    return (
        <div className={"movies-container"}>
            {errorMessage && <h2 className={"errorMessage"}>Failed to fetch data!</h2>}
            {data && data.map((movie: Movie) => (
                <div key={movie.id} className={"single-movie-container"}>
                    <h1>{movie.name}</h1>
                    <p>Release Year: {movie.releaseYear}</p>
                </div>
            ))}
        </div>
    )
}

export default Movies;