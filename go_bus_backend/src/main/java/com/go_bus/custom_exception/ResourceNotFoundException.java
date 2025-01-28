package com.go_bus.custom_exception;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String errMesg) {
		super(errMesg);
	}
}
