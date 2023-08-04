package com.sample.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Citizen {
	
	@Id
	private long id;
	private String name;
	private String address; 
	private String email; 
	private long phno; 
	private String gender; 
	private String status;


}
