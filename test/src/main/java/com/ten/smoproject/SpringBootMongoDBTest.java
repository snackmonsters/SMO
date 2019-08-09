package com.ten.smoproject;

import com.ten.smoproject.Repository.PersonMongoDBRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest()
public class SpringBootMongoDBTest {
    @Autowired()
    private PersonMongoDBRepository projectMongoDBRepository;
 
    @Test
    public void printProjectData() {
        System.out.println(projectMongoDBRepository.findAll());
    }
}