package com.exam.examserver.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "roles")
@Entity
public class Role {
	
	public Role(Long roleId, String roleName) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
	}

	@Id
	private Long roleId;
	private String roleName;
	
	@OneToMany(mappedBy = "role",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Set<UserRole> userRoles = new HashSet<>();

}
