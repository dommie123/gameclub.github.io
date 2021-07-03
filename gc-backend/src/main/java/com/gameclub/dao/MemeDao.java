package com.gameclub.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameclub.model.Meme;
import com.gameclub.model.User;

public interface MemeDao extends JpaRepository<Meme, Integer> {
	
	// Implied method addMeme
	public Meme getMemeById(int id);
	public Meme getMemeByTitle(String title);
	public List<Meme> getMemesByAuthor(User author);
	// Implied method getAllMemes
	

}
