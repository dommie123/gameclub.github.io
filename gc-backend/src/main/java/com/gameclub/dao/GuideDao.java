package com.gameclub.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameclub.model.Guide;

public interface GuideDao extends JpaRepository<Guide, Integer> {
	
	// Implied method addGuide
	public Guide getGuideById(int id);
	public Guide getGuideByTitle(String title);

}
