package com.exam.examserver.models;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2896206167251873323L;
	private String authority;

	public Authority(String authority) {
		
		this.authority = authority;
	}

	@Override
	public String getAuthority() {
		
		return this.authority;
	}
	

}
