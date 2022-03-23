package com.hcl.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.exception.DuplicateValueException;
import com.hcl.model.User;
import com.hcl.repo.UserRepo;
	
@Service
	public class UserService {
@Autowired
	private UserRepo userstd;

public User addUser(User user) {

		User u = userstd.save(user);
		return u;
	}
	   
	    public ArrayList<User> getAllUser() {
	        return (ArrayList<User>) userstd.findAll();
	    }

		public boolean findUser(String userId, String password) {
			Optional<User> u = userstd.findById(userId);
			if(u.isPresent()) {
				User user = u.get();
				if(user.getPassword().equals(password)) {
					return true;
				}
				return false;
			}
			return false;
			
		}

		
	}