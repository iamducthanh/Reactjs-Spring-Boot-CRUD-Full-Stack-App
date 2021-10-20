package com.learn.demowebservice.service;

import com.learn.demowebservice.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUserService {
    List<User> findAllUser();
    User saveUser(User user);
    ResponseEntity<User> findById(Integer userId);
}
