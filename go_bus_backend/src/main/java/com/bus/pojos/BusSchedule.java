package com.bus.pojos;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.*;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name="bus_schedule_tb")
//@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="scheduleId")

public class BusSchedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long scheduleId;
	
	@ManyToOne
	@JoinColumn(name="rto_reg_no")
    private Bus rtoRegNo;
    
	public Long getScheduleId() {
		return scheduleId;
	}

	public void setScheduleId(Long scheduleId) {
		this.scheduleId = scheduleId;
	}

	public Bus getRtoRegNo() {
		return rtoRegNo;
	}

	public void setRtoRegNo(Bus rtoRegNo) {
		this.rtoRegNo = rtoRegNo;
	}

	public String getBoardingPoint() {
		return boardingPoint;
	}

	public void setBoardingPoint(String boardingPoint) {
		this.boardingPoint = boardingPoint;
	}

	public String getDestinationPoint() {
		return destinationPoint;
	}

	public void setDestinationPoint(String destinationPoint) {
		this.destinationPoint = destinationPoint;
	}

	public LocalDate getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public LocalTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}

	public LocalTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getSourceCity() {
		return sourceCity;
	}

	public void setSourceCity(String sourceCity) {
		this.sourceCity = sourceCity;
	}

	public String getDestinationCity() {
		return destinationCity;
	}

	public void setDestinationCity(String destinationCity) {
		this.destinationCity = destinationCity;
	}

	public double getBusFare() {
		return busFare;
	}

	public void setBusFare(double busFare) {
		this.busFare = busFare;
	}

	public List<SeatAllocation> getSeatAllocation() {
		return seatAllocation;
	}

	public void setSeatAllocation(List<SeatAllocation> seatAllocation) {
		this.seatAllocation = seatAllocation;
	}

	@Column(name="boarding_point")
    private String boardingPoint;
    
	@Column(name="destination_point")
    private String destinationPoint;
    
	//@Column(name="available_seats")
    //private int availableSeats;
    
	@Column(name="departure_date")
    private LocalDate departureDate;
    
	@Column(name="arrival_date")
    private LocalDate arrivalDate;
    
	@Column(name="departure_time")
    private LocalTime departureTime;    
    
	@Column(name="arrival_time")
    private LocalTime arrivalTime;
    
	@Column(name="source_city")
    private String sourceCity;
    
	@Column(name="destination_city")
    private String destinationCity;
    
	@Column(name="bus_fare")
    private double busFare;

	@LazyCollection(LazyCollectionOption.FALSE)
	 @ElementCollection
	 @CollectionTable(name="seat_allocation_tb")
	 private List<SeatAllocation> seatAllocation = new ArrayList<>();
	 
	 //boolean isBooked, int seatNo, Gender travellerGender
	 public void initializeSeat() {
		 
		 for(int i = 0;i<rtoRegNo.getSeatCapacity();i++) {
			 seatAllocation.add(new SeatAllocation(false,i,Gender.NOTASSIGNED));
		 }
		 
	 }

	@Override
	public int hashCode() {
		return Objects.hash(scheduleId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BusSchedule other = (BusSchedule) obj;
		return Objects.equals(scheduleId, other.scheduleId);
	}
	 
	 
	 
}
