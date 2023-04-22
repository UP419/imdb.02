package com.example.imdb_02.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class MovieDTO {

    @NotEmpty(message = "Name is required")
    private String name;

    private Integer releaseYear;
}
