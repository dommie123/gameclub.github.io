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
import com.gameclub.dao.GuideDao;
import com.gameclub.model.Guide;
import com.gameclub.model.User;

@RunWith(SpringRunner.class)
@SpringBootTest(classes= {GcBackendApplication.class})

class GuideServiceTest {

	@MockBean
	private GuideDao gDao;
	
	@Autowired
	private GuideService gServ;
	
	@BeforeEach
	void setUpBeforeClass() throws Exception {
		User u1 = new User("testuser", "testFirst", "testLast", "test@example.com");
		Guide g1 = new Guide(1, "testTitle", "This is a desription", u1);
		List<Guide> guides = new ArrayList<>();
		guides.add(g1);
		u1.setGuides(guides);
		
		when(gDao.save(ArgumentMatchers.any(Guide.class))).then(invocation -> {
			Guide g = invocation.getArgument(0);
			
			return (g.getId() == 1) ? g1 : null;
				
		});
		
		when(gDao.getGuideById(ArgumentMatchers.anyInt())).then(invocation -> {
			int g = invocation.getArgument(0);
			
			return (g == 1) ? g1 : null;
				
		});
		
		when(gDao.getGuideByTitle(ArgumentMatchers.anyString())).then(invocation -> {
			String g = invocation.getArgument(0);
			
			return (g.equals("testTitle")) ? g1 : null;
		});
		
		when(gDao.getGuidesByAuthor(ArgumentMatchers.any(User.class))).then(invocation -> {
			User g = invocation.getArgument(0);
			 
			return (g.equals(u1)) ? guides : null;
				
		});
		
		when(gDao.findAll()).then(invocation -> {
			List<Guide> gList = new ArrayList<>();
			gList.addAll(guides);
			gList.add(new Guide("anotherTitle", "This is another description", new User()));
			return gList;
		});
	}

	@AfterEach
	void tearDownAfterClass() throws Exception {
	}

	@Test
	void testAddGuide() {
		fail("Not yet implemented");
	}
	
	@Test
	void testGuideGuideById() {
		fail("Not yet implemented");
	}
	
	@Test
	void testGetGuideByTitle() {
		fail("Not yet implemented");
	}
	
	@Test
	void testGetGuidesByAuthor() {
		fail("Not yet implemented");
	}
	
	@Test
	void testGetAllGuides() {
		fail("Not yet implemented");
	}

}
