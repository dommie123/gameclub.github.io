package com.gameclub.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameclub.model.User;

public interface UserDao extends JpaRepository<User, Integer> {
	
	// Implied method add user
	// Implied method get all users
	public User getUserById(int id);
	public User getUserByUsername(String username);
	
}
