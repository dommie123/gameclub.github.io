package com.gameclub.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameclub.model.Guide;
import com.gameclub.model.User;

public interface GuideDao extends JpaRepository<Guide, Integer> {
	
	// Implied method addGuide
	public Guide getGuideById(int id);
	public Guide getGuideByTitle(String title);
	public List<Guide> getGuidesByAuthor(User author);

}
