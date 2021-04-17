package com.gameclub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.MemeDao;
import com.gameclub.dao.UserDao;
import com.gameclub.model.Meme;
import com.gameclub.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class MemeService {
	
	private MemeDao mDao;
	private UserDao uDao;
	
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
	
	public List<Meme> getMemesByAuthor(int userId) {
		User u = uDao.getUserById(userId);
		List<Meme> memes = mDao.getMemesByAuthor(u);
		return memes;
	}

}
