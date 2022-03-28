package com.hcl.service;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hcl.exception.DuplicateValueException;
import com.hcl.exception.StudentNotFound;
import com.hcl.model.Student;
import com.hcl.model.User;
import com.hcl.repository.*;

@Service
public class StudentService {
	
	
	@Autowired
	private StudentRepo StudentRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	/*Add new student*/
	public Student addStudent(Student Student) {
		Optional<Student> optStud = StudentRepo.findById(Student.getId());
		if(optStud.isPresent()) {
			throw new DuplicateValueException("Student already present");
		}
		else {
			Student s = StudentRepo.save(Student);
			return s;
		}
	}
	/*get student details by id*/
	public Student getStudentById(int id) {
		Optional<Student> optStud = StudentRepo.findById(id);
		if(optStud.isPresent()) {
			return optStud.get();
		}
		else {
			throw new StudentNotFound("Student not present");
		}
	}
	/*to get all student*/
	public List<Student> getAllStudent(){
		List<Student> Students= StudentRepo.findAll();
		return Students;
	}
	/*to update student*/
	public Student updateStudent(Student Student) {
		Optional<Student> optStud = StudentRepo.findById(Student.getId());
		if(optStud.isPresent()) {
			Student s=StudentRepo.save(Student);
			return s;
		}
		else {
			throw new StudentNotFound("Not present that Student");
		}
	} 
	/*to delete student*/
	public Student deleteStudent(Student Student) {
	    
		Optional<Student> optStud = StudentRepo.findById(Student.getId());
		if(optStud.isPresent()) {
			 StudentRepo.delete(Student);
			return Student;
		}
		else {
			throw new StudentNotFound("Not present that Student");
		}
	}
	

}

