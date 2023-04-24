package com.example.imdb_02.mapper;

import com.example.imdb_02.dto.MovieDTO;
import com.example.imdb_02.entity.Movie;

public class MovieMapperImpl implements MovieMapper {

    @Override
    public Movie fromDTO(MovieDTO movieDTO) {
        return Movie.builder()
                .name(movieDTO.getName())
                .releaseYear(movieDTO.getReleaseYear())
                .build();
    }

    @Override
    public MovieDTO toDTO(Movie movie) {
        return MovieDTO.builder()
                .name(movie.getName())
                .releaseYear(movie.getReleaseYear())
                .build();
    }
}
