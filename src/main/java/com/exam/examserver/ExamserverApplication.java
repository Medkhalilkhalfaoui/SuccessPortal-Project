package com.exam.examserver;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.exam.examserver.models.Role;
import com.exam.examserver.models.User;
import com.exam.examserver.models.UserRole;
import com.exam.examserver.services.UserService;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {
	
	@Autowired
	UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}

	
	@Override
	public void run(String... args) throws Exception {
		
		
		/*
		 * System.out.println("starting code"); User user = new User();
		 * user.setFirstName("Med khalil"); user.setLastName("khalfaoui");
		 * user.setUsername("khalil");
		 * user.setPassword(this.bCryptPasswordEncoder.encode("khalil"));
		 * user.setEmail("khalfaouimohamedkhalil@gmail.com");
		 * user.setProfile("default.png");
		 * 
		 * Role role = new Role(); role.setRoleId(44L); role.setRoleName("ADMIN");
		 * 
		 * 
		 * Set<UserRole> userRoles = new HashSet<>();
		 * 
		 * UserRole userRole = new UserRole(); userRole.setRole(role);
		 * userRole.setUser(user);
		 * 
		 * userRoles.add(userRole);
		 * 
		 * User user1 = this.userService.createUser(user, userRoles);
		 * System.out.println(user1);
		 */
		 
		
	}

}
