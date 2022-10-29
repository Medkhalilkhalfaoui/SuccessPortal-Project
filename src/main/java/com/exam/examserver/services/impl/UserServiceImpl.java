package com.exam.examserver.services.impl;


import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examserver.helper.UserFoundException;
import com.exam.examserver.models.User;
import com.exam.examserver.models.UserRole;
import com.exam.examserver.repo.RoleRepository;
import com.exam.examserver.repo.UserRepositiry;
import com.exam.examserver.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepositiry userRepositiry;
	
	@Autowired
	private RoleRepository roleRepository;
	
 //creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		User localUser = this.userRepositiry.findByUsername(user.getUsername());
		if(localUser != null) {
			System.out.println("User is already there !!");
			throw new UserFoundException();
		}else {
			//create user
			for(UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			localUser = this.userRepositiry.save(user);
			
			
		}
		return localUser;
	}

	//getting user by username
	@Override
	public User getUser(String username) {
		return this.userRepositiry.findByUsername(username);
	}

	@Override
	public void deleteUser(Long userId) {
		this.userRepositiry.deleteById(userId);
		
	}

	

	
	

	

	

	

	
		
	

	

}
