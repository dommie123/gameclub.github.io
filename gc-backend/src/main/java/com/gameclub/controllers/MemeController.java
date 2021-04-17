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

import com.gameclub.model.Meme;
import com.gameclub.service.MemeService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/meme")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
public class MemeController {
	
	private MemeService mServ;
	
	@PostMapping(value="/")
	public ResponseEntity<Meme> createMeme(@RequestBody Meme m) {
		mServ.createMeme(m);
		return new ResponseEntity<>(m, HttpStatus.CREATED);
	}
	
	@GetMapping(value="/id/{memeId}")
	public Meme getMemeById(@PathVariable("memeId") int id) {
		Meme m = mServ.getMemeById(id);
		return m;
	}
	
	@GetMapping(value="/title/{memeTitle}")
	public Meme getMemeByTitle(@PathVariable("memeTitle") String title) {
		Meme m = mServ.getMemeByTitle(title);
		return m;
	}
	
	@GetMapping(value="/author/{authorId}")
	public List<Meme> getMemeByAuthor(@PathVariable("authorId") int id) {
		List<Meme> dankMemes = mServ.getMemesByAuthor(id);
		return dankMemes;
	}
	
	@GetMapping(value="/all")
	public List<Meme> getAllMemes() {
		List<Meme> all_the_memz = mServ.getAllMemes();
		return all_the_memz;
	}
	
	@DeleteMapping(value="/id/{memeId}")
	public ResponseEntity<String> yeetMeme(@PathVariable("memeId") int id) {
		mServ.removeMeme(id);
		return new ResponseEntity<>("Meme has been yeeted.", HttpStatus.GONE);
	}
}
