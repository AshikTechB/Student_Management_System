package com.hcl.controller;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hcl.service.StudentService;


public class StudentController extends HttpServlet{
	private static final long serialVersionUID = 1L;

	public StudentController() {
		super();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
        StudentService std=new StudentService();
		response.setContentType("number/html");
		PrintWriter out = response.getWriter();
		out.println("<h1>This is an example</h1>");
		int id = Integer.parseInt(request.getParameter("student_id"));
		
		out.println("<h1>Entered Id Value From Form : <hr>"+id+"<h1>");
		std.DisplayStudentById(id);
		
	}
	//c

}
