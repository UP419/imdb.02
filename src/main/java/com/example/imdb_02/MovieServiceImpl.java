package com.example.imdb_02;

import com.example.imdb_02.entity.Movie;
import com.example.imdb_02.repo.MovieRepo;
import com.example.imdb_02.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepo movieRepo;

    private boolean checkIfMovieAlreadyExists(Movie movie){
        return movieRepo.existsMovieByName(movie.getName());
    }

    @Override
    public void addMovies(Movie movie) throws RuntimeException {
        if(checkIfMovieAlreadyExists(movie)){
            throw new RuntimeException("Movie already exists");
        }
        movieRepo.save(movie);
    }

    @Override
    public void removeMovie(Long id) {
        movieRepo.deleteById(id);
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }
}
