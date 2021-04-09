package com.gameclub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.MemeDao;
import com.gameclub.model.Meme;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class MemeService {
	
	private MemeDao mDao;
	
	public Meme createMeme(Meme meme) {
		Meme m = mDao.save(meme);
		return m;
	}
	
	public Meme getMemeById(int id) {
		Meme m = mDao.getMemeById(id);
		return m;
	}
	
	public Meme getMemeByTitle(String title) {
		Meme m = mDao.getMemeByTitle(title);
		return m;
	}
	
	public List<Meme> getAllMemes() {
		List<Meme> memes = mDao.findAll();
		return memes;
	}
	
	public void removeMeme(int id) {
		mDao.deleteById(id);
	}
	
	public List<Meme> getMemesByUser(int userId) {
		// TODO implement this method in the DAO layer
		return null;
	}

}
