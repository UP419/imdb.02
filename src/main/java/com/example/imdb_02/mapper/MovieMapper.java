package com.example.imdb_02.mapper;

import com.example.imdb_02.dto.MovieDTO;
import com.example.imdb_02.entity.Movie;

public interface MovieMapper {

    Movie fromDTO(MovieDTO movieDTO);

    MovieDTO toDTO(Movie movie);
}
