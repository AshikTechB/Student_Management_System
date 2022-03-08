package com.hcl.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.hcl.model.Student;
import com.hcl.service.StudentService;

@Controller
public class StudentController {

	/*private static final Logger logger = Logger
			.getLogger(StudentController.class);*/

	public StudentController() {
		System.out.println("StudentController()");
	}

	@Autowired
	private StudentService studentService;

	@RequestMapping(value = "/")
	public ModelAndView listStudent(ModelAndView model) throws IOException {
		//List<Student> listStudent = studentService.getAllStudents();
		//model.addObject("listStudent", listStudent);
		//model.setViewName("home");
		model.setViewName("login");
		return model;
	}

	@RequestMapping(value = "/loginStudent", method = RequestMethod.POST)
	public ModelAndView loginStudent(ModelAndView model) {
		Student student = new Student();
		model.addObject("student", student);
		model.setViewName("StudentForm");
		return model;
	}

	@RequestMapping(value = "/result", method = RequestMethod.GET)
	public ModelAndView editContact(HttpServletRequest request) {
		int studentId = Integer.parseInt(request.getParameter("id"));
		
		Student student = studentService.getStudent(studentId);
		ModelAndView model = new ModelAndView("StudentForm");
		model.addObject("student", student);
		model.setViewName("home");

		return model;
	}
	
	

}