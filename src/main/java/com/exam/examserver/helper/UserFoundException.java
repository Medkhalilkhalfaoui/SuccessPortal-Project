package com.exam.examserver.helper;

public class UserFoundException extends Exception {
	
	public UserFoundException() {
		super("User with this Username not found in DB !! ");
	}
	public UserFoundException (String msg) {
		super(msg);
		
	}

}
