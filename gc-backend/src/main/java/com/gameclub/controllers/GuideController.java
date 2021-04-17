package com.gameclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import com.gameclub.exceptions.GuideNotFoundException;
import com.gameclub.exceptions.UserNotFoundException;
import com.gameclub.model.Guide;
import com.gameclub.service.GuideService;

@RestController
@RequestMapping(value="/guide")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
public class GuideController {
	
	private GuideService gServ;
	
	@PostMapping(value="/")
	public ResponseEntity<Guide> createGuide(@RequestBody Guide g) {
		gServ.createGuide(g);
		return new ResponseEntity<>(g, HttpStatus.CREATED);
	}
	
	@GetMapping(value="/id/{guideId}")
	public Guide getGuideById(@PathVariable("guideId") int id) {
		try {
			Guide g = gServ.getGuideById(id);
			return g;
		} catch (GuideNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value="/title/{guideTitle}")
	public Guide getGuideByTitle(@PathVariable("guideTitle") String title) {
		try {
			Guide g = gServ.getGuideByTitle(title);
			return g;
		} catch (GuideNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value="/author/{authorId}")
	public List<Guide> getGuideByAuthor(@PathVariable("authorId") int id) {
		try {
			List<Guide> guides = gServ.getGuidesByUser(id);
			return guides;
		} catch (UserNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value="/all")
	public List<Guide> getAllGuides() {
		List<Guide> guides = gServ.getAllGuides();
		return guides;
	}
	
	@DeleteMapping(value="/id/{guideId}")
	public ResponseEntity<String> removeGuide(@PathVariable("guideId") int id) {
		gServ.removeGuide(id);
		return new ResponseEntity<>("Resource Deleted.", HttpStatus.GONE);
	}
}
