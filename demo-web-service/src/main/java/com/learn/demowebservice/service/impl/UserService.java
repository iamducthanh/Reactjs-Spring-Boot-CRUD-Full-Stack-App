package com.learn.demowebservice.service.impl;

import com.learn.demowebservice.entity.User;
import com.learn.demowebservice.exception.ResourceNotFoundException;
import com.learn.demowebservice.repository.UserRepository;
import com.learn.demowebservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository repo;

    @Override
    public List<User> findAllUser() {
        return repo.findAll();
    }

    @Override
    public User saveUser(User user) {
        return repo.save(user);
    }

    @Override
    public ResponseEntity<User> findById(Integer userId) {
        User user = repo.findById(userId).orElseThrow(
                ()-> new ResourceNotFoundException("User not exist with id: " + userId));
        return ResponseEntity.ok(user);
    }
}
