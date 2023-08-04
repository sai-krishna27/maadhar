package com.sample.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CitizenRepo extends JpaRepository<Citizen, Long>{
	@Query("from Citizen where phno=?1")
	public Optional<Citizen> getAadharByPhone(long phone);
	
	@Query("from Citizen where status=?1")
	public Optional<Citizen> findByStatus(String status);
}
