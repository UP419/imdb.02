import axios from "axios";
import React, {useState} from "react";

interface Props {
    setMovies: React.Dispatch<React.SetStateAction<any>>;
}

const MoviesForm = ({setMovies}: Props): React.ReactElement => {
    const url: string = "http://localhost:8080/movies/add";
    const [movieName, setMovieName] = useState("");
    const [movieReleaseYear, setMovieReleaseYear] = useState(0);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        axios.post(url, {
            name: movieName,
            releaseYear: movieReleaseYear
        })
            .then(function (response) {
                setMovies(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={(e: any) => setMovieName(e.target.value)}/>
            <input type={"number"} onChange={(e: any) => setMovieReleaseYear(+e.target.value)}/>
            <input type={"submit"}/>
        </form>
    )
}

export default MoviesForm;