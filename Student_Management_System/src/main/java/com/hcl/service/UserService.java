




package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.model.User;

@Service
public interface UserService {
	
	public List<User> getAllUsers();
	
	public void addUser(User user);
	
	public boolean validate_User(long userId,String Pass);

}
