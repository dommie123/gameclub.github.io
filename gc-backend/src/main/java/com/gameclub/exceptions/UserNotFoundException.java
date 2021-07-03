package com.gameclub.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5996713055378561063L;
	
	public UserNotFoundException() {
		super("The user you are looking for does not exist!");
	}
	
	public UserNotFoundException(String message) {
		super(message);
	}

}
