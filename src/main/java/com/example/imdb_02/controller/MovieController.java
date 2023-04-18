package com.example.imdb_02.controller;

import com.example.imdb_02.entity.Movie;
import com.example.imdb_02.repo.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private MovieRepo movieRepo;

    @GetMapping("/allMovies")
    public List<Movie> getMovies(){
        return movieRepo.findAll();
    }

    @PostMapping("/add")
    public Movie add(@RequestBody Movie movie){
        return movieRepo.save(movie);
    }
}
