package com.gameclub.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.gameclub.exceptions.UserAlreadyExistsException;
import com.gameclub.exceptions.UserNotFoundException;
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
		try {
			uServ.registerUser(u);
		} catch (UserAlreadyExistsException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
		} catch (NoSuchAlgorithmException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
		}
		return new ResponseEntity<>(u, HttpStatus.CREATED);
	}
	
	@GetMapping(value="/id/{userId}")
	public User getUserById(@PathVariable("userId") int id) {
		try {
			User m = uServ.getUserById(id);
			return m;
		} catch (UserNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value="/username/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		try {
			User u = uServ.getUserByUsername(username);
			return u;
		} catch (UserNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value="/all")
	public List<User> getAllUsers() {
		List<User> users = uServ.getAllUsers();
		return users;
	}
	
	@PutMapping(value="/")
	public ResponseEntity<User> updateUser(@RequestBody User u) {
		try {
			uServ.updateUserById(u.getId(), u);
		} catch (UserNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
		}
		return new ResponseEntity<>(u, HttpStatus.CREATED);
	}
	
	@DeleteMapping(value="/id/{userId}")
	public ResponseEntity<String> removeUser(@PathVariable("userId") int id) {
		try {
			uServ.removeUser(id);
		} catch (UserNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
		return new ResponseEntity<>("User removed.", HttpStatus.GONE);
	}
}
