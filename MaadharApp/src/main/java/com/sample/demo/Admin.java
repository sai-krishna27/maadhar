package com.sample.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
@Data
@Entity
public class Admin {
	@Id
	private String email;
	private String name;
	private String password;
	
}
