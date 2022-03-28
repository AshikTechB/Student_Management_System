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

/*
 * Rest Controller Class For All the Rest API operation All the Methods are
 * mapped for Different operations
 */
public class StudentController {

	@Autowired
	private StudentService studService;

	@Autowired
	private UserService userservice;

	/* Get all the student details */
	@RequestMapping(path = "/allStudent", method = RequestMethod.GET, produces = "application/json")
	public List<Student> allstudent() {

		return studService.getAllStudent();
	}
       /*search student by id*/
	@GetMapping(value = "/student/{id}")
	public Student getstudent(@PathVariable("id") int id) {
		return studService.getStudentById(id);
	}

	/*Add new student*/
	@PostMapping(value = "/student")
	public Student newStudent(@RequestBody Student stud) {
		return studService.addStudent(stud);
	}
	
/*update student by id*/
	@PutMapping(value = "/updatestudent")
	public Student updateAnstudent(@RequestBody Student student) {
		return studService.updateStudent(student);
	}
/*delete student by id*/
	@DeleteMapping(value = "/student/{id}")
	public Student deleteAnstudent(@PathVariable("id") int id) {
		
		Student s = studService.getStudentById(id);
	     studService.deleteStudent(s);
		return s;
	}
/*to add new user*/
	@PostMapping(path = "/registeruser", consumes = "application/json")
	void addUser(@RequestBody User user) {
		userservice.addUser(user);
	}
/*to get all user details*/
	@GetMapping(path = "/users", produces = "application/json")
	public List<User> getUsers() {
		return (List<User>) userservice.getAllUsers();
	}

	@PostMapping(path = "/validateUser", produces = "application/json")
	public boolean ValidateUser(@RequestParam String username, @RequestParam String password) {
		return userservice.validate_User(username, password);
	}

}

