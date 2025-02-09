package com.bus.controller;

import java.util.List;

import jakarta.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bus.dto.ShowBookingDto;
import com.bus.pojos.Customer;
import com.bus.service.CustomerService;

@CrossOrigin("*")
@RestController
@RequestMapping("/bus/customer")
@Validated
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/{customerId}")
	public List<ShowBookingDto>  showBookings(@PathVariable Long customerId) {
	
		return customerService.showBookings(customerId);	
		
	}
	
	@GetMapping("/cancle/{bookingId}")
	public int cancleBooking(@PathVariable long bookingId) {
		
		int i = customerService.deleteBooking(bookingId);
		
		return i;
	}
	@PostMapping("/addCustomer")
	public Customer registerCustomer(@RequestBody @Valid Customer customer) {
		System.out.println("cust from rb: " + customer);
		
		//code added for password encryption --> Bcrypt Library
		String plainPassword = customer.getCustPassword();
		
		String hashedPassword = BCrypt.hashpw(plainPassword, BCrypt.gensalt());
		customer.setCustPassword(hashedPassword);
		System.out.println(hashedPassword+" "+plainPassword);
		return customerService.registerCustomer(customer);
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<Object> authenticate(@RequestBody Customer customer) {
		
		Customer c = customerService.getCustomer(customer.getCustEmail(), customer.getCustPassword());
		if(c != null) {
			
			return new ResponseEntity<Object>(c, HttpStatus.OK);
		}else {
		
			return new ResponseEntity<Object>("Invalid Credential", HttpStatus.UNAUTHORIZED);
		}	
	}
}
