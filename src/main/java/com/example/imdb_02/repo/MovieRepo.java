package com.example.imdb_02.repo;

import com.example.imdb_02.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Long> {

    boolean existsMovieByName(String name);
}
