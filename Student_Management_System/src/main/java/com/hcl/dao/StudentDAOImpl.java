package com.hcl.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hcl.model.Student;

@Repository
public class StudentDAOImpl implements StudentDAO {

	@Autowired
	private SessionFactory sessionFactory;

	
	@SuppressWarnings("unchecked")
	public List<Student> getAllStudents() {

		return sessionFactory.getCurrentSession().createQuery("from Student").list();
	}

	

	public Student getStudent(int stdid) {
		return (Student) sessionFactory.getCurrentSession().get(
				Student.class, stdid);
	}

}