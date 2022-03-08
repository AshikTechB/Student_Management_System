package com.hcl.dao;

import java.util.List;

import com.hcl.model.Student;

public interface StudentDAO {

	public void addStudent(Student student);

	public List<Student> getAllStudents();

	public void deleteStudent(Integer studentId);

	public Student updateStudent(Student student);

	public Student getStudent(int studentid);
}