




package com.hcl.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.model.User;

/*
 * User repository to perform all database operations
 */

@Repository
public interface UserRepo extends CrudRepository<User, Long>{
	
}
