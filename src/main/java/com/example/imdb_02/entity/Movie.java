package com.example.imdb_02.entity;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name="movies")
@Entity
@SequenceGenerator(name="movie_seq", sequenceName="movie_seq", allocationSize=1, initialValue=1)
public class Movie {

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="movie_seq")
    private Long id;

    @Column(nullable = false)
    private String name;

    private Integer releaseYear;
}
