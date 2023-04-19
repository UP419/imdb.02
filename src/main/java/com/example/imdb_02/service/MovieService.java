package com.example.imdb_02.service;

import com.example.imdb_02.entity.Movie;
import org.springframework.stereotype.Service;

@Service
public interface MovieService {

    void addMovies(Movie movie);

    void removeMovie(Long id);
}
