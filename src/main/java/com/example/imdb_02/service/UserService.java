package com.example.imdb_02.service;

import com.example.imdb_02.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    void addUser(User user) throws Exception;

    void deleteUser(Long id);

    void updateUser(Long id, User user);


}
