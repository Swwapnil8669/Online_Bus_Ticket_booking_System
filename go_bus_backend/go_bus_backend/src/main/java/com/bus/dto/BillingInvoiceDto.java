package com.bus.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.bus.pojos.Traveller;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BillingInvoiceDto {
	
	

	private String sourceCity;
	
	private String destinationCity;
	
	private String operatorPhone;
	
	private String companyName;
	
	private List<Traveller> travellers;
	
	private Long bookingId;
	
	private LocalTime arrivalTime;
	
    private LocalTime departureTime;
    
    private String boardingPoint;
    
    private String destinationPoint;
    
    private double totallFair;
    
    private LocalDate departureDate;
    
    private LocalDate arrivalDate;
    
    
    public BillingInvoiceDto(String sourceCity, String destinationCity, String operatorPhone, String companyName,
			List<Traveller> travellers, Long bookingId, LocalTime arrivalTime, LocalTime departureTime,
			String boardingPoint, String destinationPoint, double totallFair, LocalDate departureDate,
			LocalDate arrivalDate) {
		super();
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.operatorPhone = operatorPhone;
		this.companyName = companyName;
		this.travellers = travellers;
		this.bookingId = bookingId;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.boardingPoint = boardingPoint;
		this.destinationPoint = destinationPoint;
		this.totallFair = totallFair;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
	}
    
	
}
