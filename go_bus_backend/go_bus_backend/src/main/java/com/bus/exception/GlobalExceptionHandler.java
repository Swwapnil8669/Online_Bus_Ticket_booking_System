package com.bus.exception;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;



public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	
	//exception handler for any sever side validation failed
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		//o.s.validation.BindException.getFieldErrors() ->returns List<FieldError>
		//return error associated with fields
		List<FieldError> list = ex.getFieldErrors();
		//FeildError::getField =>lambda-> ( s->s.getField())
		Map<String,String> map = list.stream()
									 .collect(Collectors.toMap(s->s.getField(),FieldError::getDefaultMessage));	
		// returning in wrapping responseEntity object (->that represent response)
		return new ResponseEntity<>(map,HttpStatus.BAD_REQUEST);
	}
	
	//Custom exception handler method targeting specific exception 
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<Object> handleResourceNotFoundException(ResourceNotFoundException e){
		 return new ResponseEntity<>(new ApiResponse(e.getMessage()),HttpStatus.BAD_REQUEST);
	}
	
	
	
	
	
	
	
}
