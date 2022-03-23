package com.hcl.service;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hcl.exception.DuplicateValueException;
import com.hcl.exception.StudentNotFound;
import com.hcl.model.Student;
import com.hcl.model.User;
import com.hcl.repo.UserRepo;
import com.hcl.repo.StudentRepo;

@Service
public class StudentService {
	
	
	@Autowired
	private StudentRepo StudentRepo;
	
	@Autowired
	private UserRepo userRepo;
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
	
	public Student getStudentById(int id) {
		Optional<Student> optStud = StudentRepo.findById(id);
		if(optStud.isPresent()) {
			return optStud.get();
		}
		else {
			throw new StudentNotFound("Student not present");
		}
	}
	
	public List<Student> getAllStudent(){
		List<Student> Students= StudentRepo.findAll();
		return Students;
	}
	
	public String updateStudent(Student Student) {
		Optional<Student> optStud = StudentRepo.findById(Student.getId());
		if(optStud.isPresent()) {
			StudentRepo.save(Student);
			return "update completed";
		}
		else {
			throw new StudentNotFound("Not present that Student");
		}
	} 
	
	public String deleteStudent(Student Student) {
		Optional<Student> optStud = StudentRepo.findById(Student.getId());
		if(optStud.isPresent()) {
			StudentRepo.delete(Student);
			return "update completed";
		}
		else {
			throw new StudentNotFound("Not present that Student");
		}
	}
	
	public boolean findUser(String userId, String password) {
		Optional<User> u = userRepo.findById(userId);
		if(u.isPresent()) {
			User user = u.get();
			if(user.getPassword().equals(password)) {
				return true;
			}
			return false;
		}
		return false;
		
	}

}
