package com.example.imdb_02.controller;

import com.example.imdb_02.entity.Movie;
import com.example.imdb_02.entity.User;
import com.example.imdb_02.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<User> add(@RequestBody User user) throws Exception {
        userService.addUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
