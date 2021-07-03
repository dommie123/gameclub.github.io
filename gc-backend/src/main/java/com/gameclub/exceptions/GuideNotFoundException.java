package com.gameclub.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class GuideNotFoundException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2393391018586482161L;
	
	public GuideNotFoundException() {
		super("The guide you are looking for does not exist!");
	}

}
