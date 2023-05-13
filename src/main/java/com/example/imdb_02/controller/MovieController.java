package com.example.imdb_02.controller;

import com.example.imdb_02.customException.CustomException;
import com.example.imdb_02.dto.MovieDTO;
import com.example.imdb_02.dto.ResponseMessage;
import com.example.imdb_02.entity.Movie;
import com.example.imdb_02.mapper.MovieMapper;
import com.example.imdb_02.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/moviesimpl")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    private final MovieMapper movieMapper;

    @PostMapping("/add")
    public ResponseEntity<MovieDTO> addMovie(@RequestBody @Validated MovieDTO movieDto) throws CustomException {
        movieService.addMovies(movieMapper.fromDTO(movieDto));
        return new ResponseEntity<>(movieDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseMessage> deleteMovie(@PathVariable Long id) throws CustomException {
        movieService.removeMovie(id);
        ResponseMessage message = new ResponseMessage("Movie with id " + id + " has been deleted successfully.");
        return ResponseEntity.ok(message);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MovieDTO> updateMovie(@PathVariable Long id, @RequestBody @Validated MovieDTO movieDTO) throws CustomException {
        movieService.updateMovie(id, movieMapper.fromDTO(movieDTO));
        return new ResponseEntity<>(movieDTO, HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }
}
