package com.bus.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.bus.pojos.BusAmenities;
import com.bus.pojos.SeatAllocation;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class SearchResponseDto {
	
	private Long scheduleId;
	
    private String sourceCity;
    
    private String destinationCity;
    
    private LocalDate departureDate;
	
    private LocalDate arrivalDate;
    
	private String companyName;
	
	private boolean isAc;
	
	private boolean isSleeper;
	
	private BusAmenities busAmenities;
	
	private double busFare;
	
	private LocalTime arrivalTime;
	
	private LocalTime departureTime;
	
	private List<SeatAllocation> seats;
	
    private String boardingPoint;   
    
    private String destinationPoint;



	public SearchResponseDto(LocalDate arrivalDate,String destinationPoint ,String boardingPoint ,Long scheduleId, String sourceCity, String destinationCity, LocalDate departureDate,
			String companyName, boolean isAc, boolean isSleeper, BusAmenities busAmenities, double busFare,
			LocalTime arrivalTime, LocalTime departureTime, List<SeatAllocation> seats) {
		super();
		this.arrivalDate = arrivalDate;
		this.boardingPoint = boardingPoint;
		this.destinationPoint = destinationPoint;
		this.scheduleId = scheduleId;
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.departureDate = departureDate;
		this.companyName = companyName;
		this.isAc = isAc;
		this.isSleeper = isSleeper;
		this.busAmenities = busAmenities;
		this.busFare = busFare;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.seats = seats;
	}
	
	

}
