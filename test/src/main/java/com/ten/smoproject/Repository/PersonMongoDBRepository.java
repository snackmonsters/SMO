package com.ten.smoproject.Repository;

import com.ten.smoproject.DTO.users;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonMongoDBRepository extends MongoRepository<users, String> {
    public users findByName(String name);
}