package com.gameclub.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.gameclub.GcBackendApplication;
import com.gameclub.dao.UserDao;
import com.gameclub.exceptions.UserAlreadyExistsException;
import com.gameclub.exceptions.UserNotFoundException;
import com.gameclub.model.Guide;
import com.gameclub.model.Meme;
import com.gameclub.model.User;

@RunWith(SpringRunner.class)
@SpringBootTest(classes= {GcBackendApplication.class})
class UserServiceTest {
	
	@MockBean
	private UserDao uDao;
	
	@Autowired
	private UserService uServ;

	@BeforeEach
	void setUpBeforeClass() throws Exception {
		List<Meme> mList = new ArrayList<>();
		List<Guide> gList = new ArrayList<>();
		User tim = new User(1, "The Big Bad Boss", "Tim", "Martin", "tim@example.com", mList, gList);
		User dom = new User(2, "#1 Hero", "Dominick", "Wiley", "dom@example.com", mList, gList);

		
		when(uDao.save(ArgumentMatchers.any(User.class))).then(invocation -> {
			User t = invocation.getArgument(0);
			
			if (t.getId() == 2)
				return dom;
			else
				return null;
		});
		
		when(uDao.getUserById(ArgumentMatchers.anyInt())).then(invocation -> {
			int t = invocation.getArgument(0);
			
			if (t == 1)
				return tim;
			else
				return null;
		});
		
		when(uDao.getUserByUsername(ArgumentMatchers.anyString())).then(invocation -> {
			String t = invocation.getArgument(0);
			
			if (t.equals("The Big Bad Boss"))
				return tim;
			else
				return null;
		});
		
		when(uDao.findAll()).then(invocation -> {
			List<User> users = new ArrayList<>();
			users.add(tim);
			users.add(dom);
			return users;
		});
	}

	@Test
	void testAddUser() throws UserAlreadyExistsException {
		List<Meme> mList = new ArrayList<>();
		List<Guide> gList = new ArrayList<>();
		User dom = new User(2, "#1 Hero", "Dominick", "Wiley", "dom@example.com", mList, gList);
		User d = uServ.registerUser(dom);
		assertEquals(2, d.getId());
	}

	@Test
	void testGetUserById() throws UserNotFoundException {
		User u = uServ.getUserById(1);
		assertEquals("The Big Bad Boss", u.getUsername());
	}
	
	@Test
	void testGetUserByUsername() throws UserNotFoundException {
		User u = uServ.getUserByUsername("The Big Bad Boss");
		assertEquals(1, u.getId());
	}
	
	@Test
	void testGetAllUsers() {
		List<User> users = uServ.getAllUsers();
		assertEquals(2, users.size());
	}
}
