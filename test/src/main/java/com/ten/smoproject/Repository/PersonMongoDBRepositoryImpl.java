package com.ten.smoproject.Repository;

import com.ten.smoproject.DTO.users;

import org.springframework.data.mongodb.repository.MongoRepository;

public class PersonMongoDBRepositoryImpl implements PersonMongoDBRepository {
    public users findByName(String name);
}