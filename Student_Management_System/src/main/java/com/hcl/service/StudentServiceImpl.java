package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hcl.dao.StudentDAO;
import com.hcl.model.Student;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentDAO StudentDAO;

	@Override
	@Transactional
	public void addStudent(Student Student) {
		StudentDAO.addStudent(Student);
	}

	@Override
	@Transactional
	public List<Student> getAllStudents() {
		return StudentDAO.getAllStudents();
	}

	@Override
	@Transactional
	public void deleteStudent(Integer StudentId) {
		StudentDAO.deleteStudent(StudentId);
	}

	public Student getStudent(int studid) {
		return StudentDAO.getStudent(studid);
	}

	public Student updateStudent(Student Student) {
		// TODO Auto-generated method stub
		return StudentDAO.updateStudent(Student);
	}

	public void setStudentDAO(StudentDAO StudentDAO) {
		this.StudentDAO = StudentDAO;
	}

}