package com.gameclub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gameclub.dao.GuideDao;
import com.gameclub.model.Guide;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class GuideService {
	
	private GuideDao gDao;
	
	public Guide createGuide(Guide guide) {
		Guide g = gDao.save(guide);
		return g;
	}
	
	// GuideNotFoundException
	public Guide getGuideById(int id) {
		Guide g = gDao.getGuideById(id);
		return g;
	}
	
	// GuideNotFoundException
	public Guide getGuideByTitle(String title) {
		Guide g = gDao.getGuideByTitle(title);
		return g;
	}
	
	public List<Guide> getAllGuides() {
		List<Guide> guides = gDao.findAll();
		return guides;
	}
	
	// GuideNotFoundException
	public void removeGuide(int id) {
		gDao.deleteById(id);
	}
	
	// UserDoesNotException
	public List<Guide> getGuidesByUser(int userId) {
		// TODO implement this method in the DAO layer
		return null;
	}

}
