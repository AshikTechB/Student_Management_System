package com.hcl.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;


public class StudentDAO {
	@SuppressWarnings("unchecked")
	public List<Integer> findById(int id) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Query selectQuery = session.createQuery("select obj from Student obj where obj.id =:au");
		selectQuery.setParameter("au", id);
		List<Integer> resultset = selectQuery.list();
		
		session.close();
		return resultset;
	}
	
}
