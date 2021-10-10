package com.gameclub.service;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.MemeDao;
import com.gameclub.dao.UserDao;
import com.gameclub.exceptions.MemeNotFoundException;
import com.gameclub.exceptions.UserNotFoundException;
import com.gameclub.model.Meme;
import com.gameclub.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class MemeService {
	
	private MemeDao mDao;
	private UserDao uDao;
	
	public Meme createMeme(Meme meme) {
		String partSeparator = ",";
		String data = meme.getByteStream().toString();
		if (data.contains(partSeparator)) {
		  String encodedImg = data.split(partSeparator)[1];
		  byte[] decodedImg = Base64.getDecoder().decode(encodedImg.getBytes(StandardCharsets.UTF_8));
		  meme.setByteStream(decodedImg);
		}
		
		Meme m = mDao.save(meme);
		return m;
	}
	
	public Meme getMemeById(int id) throws MemeNotFoundException {
		Meme m = mDao.getMemeById(id);
		if (m == null)
			throw new MemeNotFoundException();
		return m;
	}
	
	public Meme getMemeByTitle(String title) throws MemeNotFoundException {
		Meme m = mDao.getMemeByTitle(title);
		if (m == null)
			throw new MemeNotFoundException();
		return m;
	}
	
	public List<Meme> getAllMemes() {
		List<Meme> memes = mDao.findAll();
		return memes;
	}
	
	public void removeMeme(int id) throws MemeNotFoundException {
		if (!mDao.existsById(id))
			throw new MemeNotFoundException();
		mDao.deleteById(id);
	}
	
	public List<Meme> getMemesByAuthor(int userId) throws UserNotFoundException {
		if (!uDao.existsById(userId))
			throw new UserNotFoundException();
		User u = uDao.getUserById(userId);
		List<Meme> memes = mDao.getMemesByAuthor(u);
		return memes;
	}

}
