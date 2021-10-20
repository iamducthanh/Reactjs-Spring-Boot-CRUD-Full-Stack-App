package com.learn.demowebservice.controller;

import com.learn.demowebservice.entity.User;
import com.learn.demowebservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping
    public List<User> findAllUser(){
        return userService.findAllUser();
    }


    @PostMapping()
    public void createUser(@RequestBody User user){
        userService.saveUser(user);
        System.out.println(user.toString());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Integer userId){
        return userService.findById(userId);
    }

    @PutMapping("")
    public ResponseEntity<User> updateUser(User user){
        return ResponseEntity.ok(userService.saveUser(user));
    }
}
