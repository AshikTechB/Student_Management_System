package com.hcl.service;

import java.text.SimpleDateFormat;
import java.util.List;

import com.hcl.dao.*;
import com.hcl.model.*;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/studentService")
public class StudentService {
	StudentDAO std = new StudentDAO();
	Student s=new Student();
	@GET
	@Path("/displaystudent")
	@Produces("text/plain")
	public Student findStudentId(Integer id)
	{
		List<Integer> student = std.findById(id);
		for (Object object : student) {
			 s=(Student)object;
		}
		return s;
}
	public void DisplayStudentById(int student_id) {
		StudentDAO bkd=new StudentDAO();
		SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
		System.out.println("Displaying Student From DataBase  'PREM'  :");
		List<Integer> l=bkd.findById( 003);
		System.out.printf("%-15s %-15s %-15s %-15s %s\n","Id","Name","Date of Admission");
		for (Object object : l) {
			Student b=(Student) object;
			System.out.printf("%-15s %-15s %-15s %-15s %s\n",b.getId(),b.getName(),sdf.format(b.getDateOfAdmission()));	
		
	}
	
}
}
