package com.bus.exception;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException{

	public ResourceNotFoundException() {
		super("resource not found");
	}	
}
