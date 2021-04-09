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
		
		when(uDao.save(ArgumentMatchers.any(User.class))).then(invocation -> {
			User t = invocation.getArgument(0);
			
			if (t.getId() == 1)
				return tim;
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
			return users;
		});
	}

	@AfterEach
	void tearDownAfterClass() throws Exception {
	}

	@Test
	void test() {
		fail("Not yet implemented");
	}

}
