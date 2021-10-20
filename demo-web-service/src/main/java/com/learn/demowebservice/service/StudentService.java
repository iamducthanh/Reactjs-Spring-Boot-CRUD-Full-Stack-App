package com.learn.demowebservice.service;

import com.learn.demowebservice.entity.Student;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class StudentService {

    public List<Student> findAllStudent(){
        return List.of(
                new Student(10000,"Nguyen Duc Thanh","thanh@.com",22, LocalDate.of(2020, Month.DECEMBER,5))
        );
    };
}
