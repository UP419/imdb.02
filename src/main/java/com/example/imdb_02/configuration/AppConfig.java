package com.example.imdb_02.configuration;

import com.example.imdb_02.mapper.MovieMapper;
import com.example.imdb_02.mapper.MovieMapperImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
   public MovieMapper movieMapper(){
        return new MovieMapperImpl();
    }
}
