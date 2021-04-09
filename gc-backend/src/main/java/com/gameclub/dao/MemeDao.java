package com.gameclub.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameclub.model.Meme;

public interface MemeDao extends JpaRepository<Meme, Integer> {
	
	// Implied method addMeme
	public Meme getMemeById(int id);
	public Meme getMemeByTitle(String title);
	// Impled method getAllMemes
	

}
