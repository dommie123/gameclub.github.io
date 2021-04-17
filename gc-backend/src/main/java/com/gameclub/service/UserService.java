package com.gameclub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.UserDao;
import com.gameclub.exceptions.UserAlreadyExistsException;
import com.gameclub.exceptions.UserNotFoundException;
import com.gameclub.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class UserService {
	
	private UserDao uDao;
	
	public User registerUser(User user) throws UserAlreadyExistsException {
		if (uDao.existsById(user.getId()))
			throw new UserAlreadyExistsException();
		User u = uDao.save(user);
		return u;
	}
	
	public User getUserById(int id) throws UserNotFoundException {
		User u = uDao.getUserById(id);
		if (u == null)
			throw new UserNotFoundException();
		return u;
	}
	
	public User getUserByUsername(String username) throws UserNotFoundException {
		User u = uDao.getUserByUsername(username);
		if (u == null)
			throw new UserNotFoundException();
		return u;
	}
	
	public List<User> getAllUsers() {
		List<User> users = uDao.findAll();
		return users;
	}
	
	public void removeUser(int id) throws UserNotFoundException {
		if (!uDao.existsById(id))
			throw new UserNotFoundException();
		uDao.deleteById(id);
	}

}
