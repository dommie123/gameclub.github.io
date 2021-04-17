package com.gameclub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.UserDao;
import com.gameclub.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class UserService {
	
	private UserDao uDao;
	
	public User registerUser(User user) {
		User u = uDao.save(user);
		return u;
	}
	
	public User getUserById(int id) {
		User u = uDao.getUserById(id);
		return u;
	}
	
	public User getUserByUsername(String username) {
		User u = uDao.getUserByUsername(username);
		return u;
	}
	
	public List<User> getAllUsers() {
		List<User> users = uDao.findAll();
		return users;
	}
	
	public void removeUser(int id) {
		uDao.deleteById(id);
	}

}
