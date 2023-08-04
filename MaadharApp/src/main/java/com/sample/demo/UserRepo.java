package com.sample.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User,String> {
	
	@Query("select count(*) from User where email=?1")
	public int hasUser(String email);

	@Query("select name from User where email=?1 and password=?2")
	public String validLogin(String email, String pass);
}
