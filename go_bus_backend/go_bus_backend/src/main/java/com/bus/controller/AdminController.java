package com.bus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bus.pojos.Operator;
import com.bus.service.OperatorService;

@CrossOrigin("*")
@RequestMapping("/bus/admin")
@RestController
public class AdminController {

	@Autowired
	private OperatorService opService;
	
	@GetMapping
	public List<Operator> showAllOperator(){
		
		return opService.getAllOperator();
	}
	
	
	@GetMapping("/approve/{operatorId}")
	public Operator approveOperator(@PathVariable long operatorId) {
		
		System.out.println(operatorId);
		return opService.approveOperator(operatorId);
	}
	
	@DeleteMapping("/{operatorId}")
	public int DeleteOperator(@PathVariable long operatorId) {		
		
		opService.deleteOperator(operatorId);
		
		return 1;
	}
	
	
}
