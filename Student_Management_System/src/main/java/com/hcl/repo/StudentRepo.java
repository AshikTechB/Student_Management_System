package com.hcl.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {

}
