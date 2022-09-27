package com.exam.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examserver.models.User;

public interface UserRepositiry extends JpaRepository<User, Long> {
	
	public User findByUsername(String username);

}
