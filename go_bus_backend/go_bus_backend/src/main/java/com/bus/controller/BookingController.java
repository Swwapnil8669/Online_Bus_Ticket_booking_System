package com.bus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bus.dto.BillingInvoiceDto;
import com.bus.pojos.Booking;
import com.bus.pojos.Traveller;
import com.bus.service.BookingService;

@CrossOrigin("*")
@RequestMapping("/bus/book")
@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	//id = customer id
	@PostMapping("/{id}/{scheduleId}")
	public BillingInvoiceDto book(@PathVariable Long scheduleId, @RequestBody Booking booking,
			@PathVariable long id) {
		
		BillingInvoiceDto dto = bookingService.createBooking(scheduleId, booking.isPaymentStatus(), booking.getTransactioId(), 
				booking.getTravellers(), id);
		
		    return dto;
		
	}

}
