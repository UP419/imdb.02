package com.example.imdb_02.controller;

import com.example.imdb_02.customException.CustomException;
import com.example.imdb_02.dto.MovieDTO;
import com.example.imdb_02.entity.Movie;
import com.example.imdb_02.mapper.MovieMapper;
import com.example.imdb_02.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    private final MovieMapper movieMapper;

    @PostMapping("/add")
    public ResponseEntity<MovieDTO> add(@RequestBody @Validated MovieDTO movieDto) throws CustomException {
        movieService.addMovies(movieMapper.fromDTO(movieDto));
        return new ResponseEntity<>(movieDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) throws CustomException {
        movieService.removeMovie(id);
    }

    @GetMapping("/all")
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }
}
