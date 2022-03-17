package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {

}
