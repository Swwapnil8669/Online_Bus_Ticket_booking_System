package com.bus.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.bus.pojos.SeatAllocation;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class BusScheduleDto {
	
	private Long scheduleId;
	
	private String boardingPoint;
	
	private String destinationPoint;
	
	private LocalDate departureDate;
	
    private LocalDate arrivalDate;
    
    private LocalTime departureTime;  
    
    private LocalTime arrivalTime;
    
    private String sourceCity;
    
    private String destinationCity;
    
    private double busFare;
    
    private List<SeatAllocation> seatAllocation;

	public BusScheduleDto(Long scheduleId, String boardingPoint, String destinationPoint, LocalDate departureDate,
			LocalDate arrivalDate, LocalTime departureTime, LocalTime arrivalTime, String sourceCity,
			String destinationCity, double busFare, List<SeatAllocation> seatAllocation) {
		super();
		this.scheduleId = scheduleId;
		this.boardingPoint = boardingPoint;
		this.destinationPoint = destinationPoint;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.busFare = busFare;
		this.seatAllocation = seatAllocation;
	}
    

}
