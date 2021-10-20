package com.learn.demowebservice.controller;

import com.learn.demowebservice.entity.Student;
import com.learn.demowebservice.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping("api/v1/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/find-all")
    public List<Student> findAllStudent(){
        return studentService.findAllStudent();
    }
}
