package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.model.StudentLogin;

public interface StudentLoginRepo extends JpaRepository<StudentLogin,String>{

}
