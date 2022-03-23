package com.hcl.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.model.User;

public interface UserRepo extends JpaRepository<User,String>{

}
