package com.example.imdb_02.service;

import com.example.imdb_02.entity.Movie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MovieService {

    void addMovies(Movie movie) throws RuntimeException;

    void removeMovie(Long id);

    List<Movie> getAllMovies();
}
