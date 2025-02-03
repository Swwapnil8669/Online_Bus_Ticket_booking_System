package com.bus.exception;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ApiResponse {
	String msg;
	LocalDateTime timestam;
	
	
	public ApiResponse(String msg) {
		this.msg = msg;
		timestam = LocalDateTime.now();
	}
}
