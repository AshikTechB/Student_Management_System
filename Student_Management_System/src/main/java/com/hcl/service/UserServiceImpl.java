package com.hcl.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.exception.DuplicateValueException;
import com.hcl.exception.StudentNotFound;
import com.hcl.model.Student;
import com.hcl.model.User;
import com.hcl.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepository;

	@Override
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@Transactional
	@Override
	public void addUser(User user) {
		Optional<User> optStud = userRepository.findById(user.getId());
		if(optStud.isPresent()) {
			throw new DuplicateValueException("User already present");
		}
		else {
		    userRepository.save(user);
		}
	}
	
	
}

///here create a method
