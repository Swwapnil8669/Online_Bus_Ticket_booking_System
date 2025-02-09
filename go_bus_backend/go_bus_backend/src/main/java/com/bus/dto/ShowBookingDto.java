package com.bus.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.bus.pojos.Customer;
import com.bus.pojos.Traveller;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@NoArgsConstructor
public class ShowBookingDto {

	private Long bookingId;
	
	private Customer id;
	
    private LocalDate dateOfBooking;
	 
	private LocalTime timeOfBooking;
	 
	private boolean paymentStatus;
	    
	private String transactioId;
	    
	private double totalAmount;
	    
	private String status; 
	
	private LocalDate departureDate;
	
	private LocalDate arrivalDate;
	
	private LocalTime departureTime;
	
	private LocalTime arrivalTime;
	
    private String sourceCity;
	 
    private String destinationCity;
    
    private List<Traveller> travellers = new ArrayList<>();

	public ShowBookingDto(Long bookingId, Customer id, LocalDate dateOfBooking, LocalTime timeOfBooking,
			boolean paymentStatus, String transactioId, double totalAmount, String status, LocalDate departureDate,
			LocalDate arrivalDate, LocalTime departureTime, LocalTime arrivalTime, String sourceCity,
			String destinationCity, List<Traveller> travellers) {
		super();
		this.bookingId = bookingId;
		this.id = id;
		this.dateOfBooking = dateOfBooking;
		this.timeOfBooking = timeOfBooking;
		this.paymentStatus = paymentStatus;
		this.transactioId = transactioId;
		this.totalAmount = totalAmount;
		this.status = status;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.travellers = travellers;
	}
	
	
}
