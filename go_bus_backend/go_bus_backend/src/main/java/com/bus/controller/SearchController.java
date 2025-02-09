package com.bus.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bus.dto.SearchResponseDto;
import com.bus.pojos.SeatAllocation;
import com.bus.service.BusService;
@CrossOrigin("*")
@RestController
@RequestMapping("/")
public class SearchController {
	
	@Autowired
	private BusService service;
	
	public SearchController() {
		// TODO Auto-generated constructor stub
	}
	@GetMapping("/test")
	public String TestMehtod() {
		return "Hellow World";
	}
	 
	@GetMapping("/bus/search/{sourceCity}/{destinationCity}/{departureDate}")
	public List<SearchResponseDto> searchBus(@PathVariable String sourceCity, @PathVariable String destinationCity,
			@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate departureDate) {
		
		return service.getBus(sourceCity, destinationCity, departureDate);
	}
	
	@GetMapping("/bus/refresh/{scheduleId}")
	public List<SeatAllocation> refreshSeatStatus(@PathVariable long scheduleId){
		
		return service.getSeatAllocationList(scheduleId);
	}
	
	
}
