package com.sample.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class MaadharController {
	
	@Autowired
	AdminRepo adminDao;
	
	@Autowired
	UserRepo userDao;
	
	@Autowired
	CitizenRepo citizenDao;
	
	
	@PostMapping("/addAdmin")
	public boolean addAdmin(@RequestBody Admin admin){
		int c=adminDao.hasAdmin(admin.getEmail());
		if(c>0) {
			return false;
		}
		else {
			adminDao.save(admin);
			return true;
		}
		
	}
	
	@GetMapping("/validAdminLogin/{email}/{password}")
	public boolean validateAdmin(@PathVariable("email") String email,@PathVariable("password") String pass) {
		if(adminDao.validLogin(email,pass)!=null) {
			return true;
		}
		return false;
	}
	
	@PostMapping("/addUser")
	public boolean addAdmin(@RequestBody User user){
		int c=userDao.hasUser(user.getEmail());
		if(c>0) {
			return false;
		}
		else {
			userDao.save(user);
			return true;
		}
		
	}
	
	@GetMapping("/validUserLogin/{email}/{password}")
	public boolean validateUser(@PathVariable("email") String email,@PathVariable("password") String pass) {
		if(userDao.validLogin(email,pass)!=null) {
			return true;
		}
		return false;
	}
	
	@PostMapping("/addCitizen")
	public Citizen addCitizen(@RequestBody Citizen citizen) {
		return citizenDao.save(citizen);
	}
	
	@GetMapping("getCitizens")
	public List<Citizen> getCitizensList(){
		return citizenDao.findAll();
	}
	
	@GetMapping("getCitizenById/{id}")
	public Optional<Citizen> getCitizenById(@PathVariable long id){
		return citizenDao.findById(id);
	}
	
	@GetMapping("getCitizenByStatus/{status}")
	public Optional<Citizen> getCitizenByStatus(@PathVariable String status){
		return citizenDao.findByStatus(status);
	}
	
	@PutMapping("updateCitizen")
	public void updateCitizen(@RequestBody Citizen citizen) { 
		citizenDao.save(citizen);
	}
	 
	@GetMapping("getAadharByPhone/{phone}")
	public Optional<Citizen> getAadharByPhone(@PathVariable("phone") long phone) {
		return citizenDao.getAadharByPhone(phone);
	}
	
	
}
