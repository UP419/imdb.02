package com.example.imdb_02.customException;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CustomException extends Exception{

    public CustomException(String message){
        super(message);
    }
}
