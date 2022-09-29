package com.exam.examserver.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exam.examserver.models.User;
import com.exam.examserver.repo.UserRepositiry;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserRepositiry userRepositiry;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = this.userRepositiry.findByUsername(username);
		if(user == null) {
			System.out.println("User not found ");
			throw new UsernameNotFoundException("No user found !!");
		}
		return user;
	}

}
