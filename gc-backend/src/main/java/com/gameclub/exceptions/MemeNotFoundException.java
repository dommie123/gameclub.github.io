package com.gameclub.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class MemeNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8105243187361902051L;
	
	public MemeNotFoundException() {
		super("The meme you are looking for has been yeeted and deleted!");
	}
}
