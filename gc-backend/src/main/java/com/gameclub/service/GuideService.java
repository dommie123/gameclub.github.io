package com.gameclub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.GuideDao;
import com.gameclub.dao.UserDao;
import com.gameclub.exceptions.GuideNotFoundException;
import com.gameclub.exceptions.UserNotFoundException;
import com.gameclub.model.Guide;
import com.gameclub.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class GuideService {
	
	private UserDao uDao;
	private GuideDao gDao;
	
	public Guide createGuide(Guide guide) {
		Guide g = gDao.save(guide);
		return g;
	}
	
	public Guide getGuideById(int id) throws GuideNotFoundException {
		Guide g = gDao.getGuideById(id);
		if (g == null)
			throw new GuideNotFoundException();
		return g;
	}
	
	public Guide getGuideByTitle(String title) throws GuideNotFoundException {
		Guide g = gDao.getGuideByTitle(title);
		if (g == null)
			throw new GuideNotFoundException();
		return g;
	}
	
	public List<Guide> getAllGuides() {
		List<Guide> guides = gDao.findAll();
		return guides;
	}
	
	public void removeGuide(int id) {
		gDao.deleteById(id);
	}
	
	public List<Guide> getGuidesByUser(int userId) throws UserNotFoundException {
		if (!uDao.existsById(userId))
			throw new UserNotFoundException();
		User u = uDao.getUserById(userId);
		List<Guide> guides = gDao.getGuidesByAuthor(u);
		return guides;
	}

}
