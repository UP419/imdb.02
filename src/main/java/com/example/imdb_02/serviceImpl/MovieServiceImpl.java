package com.example.imdb_02.serviceImpl;

import com.example.imdb_02.customException.CustomException;
import com.example.imdb_02.entity.Movie;
import com.example.imdb_02.exceptions.ExceptionConstants;
import com.example.imdb_02.repo.MovieRepo;
import com.example.imdb_02.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepo movieRepo;

    private boolean checkIfMovieExistsByName(String movieName){
        return movieRepo.existsMovieByName(movieName);
    }

    private boolean checkIfMovieExistsById(Long id){
        return movieRepo.existsById(id);
    }

    @Override
    public void addMovies(Movie movie) throws CustomException {
        if(checkIfMovieExistsByName(movie.getName())){
            throw new CustomException(ExceptionConstants.MOVIE_ALREADY_EXISTS);
        }
        movieRepo.save(movie);
    }

    @Override
    public void removeMovie(Long id) throws CustomException {
        if(!checkIfMovieExistsById(id)){
            throw new CustomException(ExceptionConstants.MOVIE_DOES_NOT_EXIST);
        }
        movieRepo.deleteById(id);
    }

    @Override
    public void updateMovie(Long id, Movie movie) throws CustomException {
        Optional<Movie> movieOptional = movieRepo.findById(id);
        if(movieOptional.isEmpty()){
            throw new CustomException(ExceptionConstants.MOVIE_DOES_NOT_EXIST);
        }
        Movie updatedMovie = movieOptional.get();
        updatedMovie.setName(movie.getName());
        updatedMovie.setReleaseYear(movie.getReleaseYear());
        movieRepo.save(updatedMovie);
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }
}
