package com.gameclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gameclub.model.User;
import com.gameclub.model.User;
import com.gameclub.service.MemeService;
import com.gameclub.service.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/user")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
public class UserController {
	
	private UserService uServ;
	
	@PostMapping(value="/")
	public ResponseEntity<User> registerUser(@RequestBody User u) {
		uServ.registerUser(u);
		return new ResponseEntity<>(u, HttpStatus.CREATED);
	}
	
	@GetMapping(value="/id/{userId}")
	public User getUserById(@PathVariable("userId") int id) {
		User m = uServ.getUserById(id);
		return m;
	}
	
	@GetMapping(value="/username/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		User u = uServ.getUserByUsername(username);
		return u;
	}
	
	@GetMapping(value="/all")
	public List<User> getAllUsers() {
		List<User> users = uServ.getAllUsers();
		return users;
	}
	
	@DeleteMapping(value="/id/{userId}")
	public ResponseEntity<String> removeUser(@PathVariable("userId") int id) {
		uServ.removeUser(id);
		return new ResponseEntity<>("User removed.", HttpStatus.GONE);
	}
}
