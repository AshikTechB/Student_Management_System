package com.hcl.dao;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;


// some error occurs
public class StudentDAO {
	public List findById(int id) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Query selectQuery = session.createQuery("select obj from Student obj where obj.id =:au");
		selectQuery.setParameter("au", id);
		List resultset = selectQuery.list();
		session.close();
		return resultset;
	}
	
}
