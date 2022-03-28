





package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.hcl.model.Student;
/*
 * Student repository to perform all database operations
 */

public interface StudentRepo extends JpaRepository<Student, Integer> {

}
