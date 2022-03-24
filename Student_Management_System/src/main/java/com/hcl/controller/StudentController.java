package com.hcl.controller;

import java.io.IOException;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hcl.model.Student;
import com.hcl.model.User;
import com.hcl.service.StudentService;
import com.hcl.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4207/")

public class StudentController {

	@Autowired
	private StudentService studService;

	@Autowired
	private UserService userservice;

	@RequestMapping(path = "/allStudent", method = RequestMethod.GET, produces = "application/json")
	public List<Student> allstudent() {

		return studService.getAllStudent();
	}

	@GetMapping(value = "/student/{id}")
	public Student getstudent(@PathVariable("id") int id) {
		return studService.getStudentById(id);
	}

	@PostMapping(value = "/student")
	public Student newStudent(@RequestBody Student stud) {
		return studService.addStudent(stud);
	}

	@PutMapping(value = "/updatestudent")
	public String updateAnstudent(@RequestBody Student student) {
		return studService.updateStudent(student);
	}

	@DeleteMapping(value = "/student/{id}")
	public String deleteAnstudent(@PathVariable("id") int id) {
		Student s = studService.getStudentById(id);
		return studService.deleteStudent(s);
	}

	@PostMapping(path = "/users", consumes = "application/json")
	void addUser(@RequestBody User user) {
		userservice.addUser(user);
	}

	@GetMapping(path = "/users", produces = "application/json")
	public List<User> getUsers() {
		return (List<User>) userservice.getAllUsers();
	}

	@PostMapping(path = "/validateUser", produces = "application/json")
	public boolean ValidateUser(@RequestParam String username, @RequestParam String password) {
		return userservice.validate_User(username, password);
	}

}
