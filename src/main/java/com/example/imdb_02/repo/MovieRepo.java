package com.example.imdb_02.repo;

import com.example.imdb_02.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepo extends JpaRepository<Movie, Integer> {

}
