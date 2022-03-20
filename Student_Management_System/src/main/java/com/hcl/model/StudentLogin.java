package com.hcl.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class StudentLogin {
	
	@Id
	String studId;
	
	String password;
	
	public StudentLogin(String userId, String password) {
		super();
		this.studId = userId;
		this.password = password;
	}
	public StudentLogin() {
		
	}
	public String getUserId() {
		return studId;
	}
	public void setUserId(String userId) {
		this.studId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
