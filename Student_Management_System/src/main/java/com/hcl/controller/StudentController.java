package com.hcl.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:2220")
public class StudentController {
	
	@Autowired
	private StudentService studService;
	
	private UserService uss;
	
	@RequestMapping(path = "/allStudent", method=RequestMethod.GET, produces = "application/json")
	public List<Student> allstudent(){
		return studService.getAllStudent();
	}
	
	@GetMapping(value="/student/{id}")
	public Student getstudent(@PathVariable("id") int id) {
		return studService.getStudentById(id);
	}
	
	
	@PostMapping(value="/student")
	public Student newStudent(@RequestBody Student stud) {
		return studService.addStudent(stud);
	}
	
	
	@PutMapping(value="/updatestudent")
	public String updateAnstudent(@RequestBody Student student) {
		return studService.updateStudent(student);
	}
	
	@DeleteMapping(value="/student/{id}")
	public String deleteAnstudent(@PathVariable("id") int id){
		Student s = studService.getStudentById(id);
		return studService.deleteStudent(s);
	}
	
	@RequestMapping(value="/login", method= RequestMethod.GET)
	public String userLogin(@RequestParam String userId, String password) throws IOException {
		if(uss.findUser(userId, password)) {
			return "success";
		}
		else {
		return "failed";
		}
	}
	
	@PostMapping(value="/user")
	public User newUser(@RequestBody User user) {
		return uss.addUser(user);
	}
	
	
	
}