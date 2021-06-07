package com.gameclub.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.gameclub.GcBackendApplication;
import com.gameclub.dao.MemeDao;
import com.gameclub.exceptions.MemeNotFoundException;
import com.gameclub.model.Meme;
import com.gameclub.model.User;

@RunWith(SpringRunner.class)
@SpringBootTest(classes= {GcBackendApplication.class})
class MemeServiceTest {
	
	@MockBean
	private MemeDao mDao;
	
	@Autowired
	private MemeService mServ;

	@BeforeEach
	void setUpBeforeClass() throws Exception {
		Meme dankness = new Meme();
		Meme such_dank = new Meme();
		Meme that_moment_when = new Meme();
		List<Meme> all_the_memes = new ArrayList<>();
		
		dankness.setId(1);
		dankness.setTitle("Doge Variable");
		dankness.setAuthor(new User(1, "#1 Hero", "password", "Dominick", "Wiley", "dom@example.com", new ArrayList<>(), new ArrayList<>()));
		all_the_memes.add(dankness);
		dankness.getAuthor().setMemes(all_the_memes);
		such_dank.setId(2);
		that_moment_when.setId(3);
		
		when(mDao.save(ArgumentMatchers.any(Meme.class))).then(invocation -> {
			Meme m = invocation.getArgument(0);
			return (m.getId() == 3) ? that_moment_when : null;
		});
		
		when(mDao.getMemeById(ArgumentMatchers.anyInt())).then(invocation -> {
			int id = invocation.getArgument(0);
			return (id == 1) ? dankness : null;
		});
		
		when(mDao.getMemeByTitle(ArgumentMatchers.anyString())).then(invocation -> {
			String m = invocation.getArgument(0);
			return (m.equals("Doge Variable")) ? dankness : null;
		});
		
		when(mDao.getMemesByAuthor(ArgumentMatchers.any(User.class))).then(invocation -> {
			User u = invocation.getArgument(0);
			List<Meme> memes = u.getMemes();
			return (u.getId() == 1) ? memes : null;
		});
		
		when(mDao.findAll()).then(invocation -> {
			List<Meme> all_dem_memes = new ArrayList<>();
			all_dem_memes.add(dankness);
			all_dem_memes.add(such_dank);
			return all_dem_memes;
		});
	}

	@Test
	void testCreateMeme() {
		Meme your_meme_becomes_a_variable = new Meme();
		your_meme_becomes_a_variable.setId(3);
		Meme m = mServ.createMeme(your_meme_becomes_a_variable);
		assertEquals(3, m.getId());
	}
	
	@Test
	void testGetMemeById() throws MemeNotFoundException {
		Meme m = mServ.getMemeById(1);
		assertEquals("Doge Variable", m.getTitle());	
	}
	
	@Test
	void testGetMemeByTitle() throws MemeNotFoundException {
		Meme m = mServ.getMemeByTitle("Doge Variable");
		assertEquals(1, m.getId());	
	}
	
	@Test
	void testGetAllMemes() {
		List<Meme> all_the_memes = mServ.getAllMemes();
		assertEquals(2, all_the_memes.size());
	}

}
