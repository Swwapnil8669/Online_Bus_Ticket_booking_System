package com.bus.pojos;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="booking_tb")
public class Booking {
	//PK: booking id
    //FK: schedule id
    //FK: cust id
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;
	
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="schedule_id")
	private BusSchedule scheduleId;
	
    //unidirectional
	//customer_Id
	@ManyToOne
	@JoinColumn(name="cust_id")
	private Customer id;
	
	
    @Column(name="date_of_booking")
    private LocalDate dateOfBooking;
    
    @Column(name="time_of_booking")
    private LocalTime timeOfBooking;
    
    @Column(name="payment_status")
    private boolean paymentStatus;
    
    @Column(name="transaction_id")
    private String transactioId;
    
	
	@Column(name="total_amount") 
	private double totalAmount;
	
	
	//1.booked  2.cancelled 3.completed
	@Column(name = "booking_status")
	private String status; 
 

	public Booking(BusSchedule scheduleId, Customer id, LocalDate dateOfBooking, LocalTime timeOfBooking,
			boolean paymentStatus, String transactioId, double totalAmount, List<Traveller> travellers) {
		super();
		this.scheduleId = scheduleId;
		this.id = id;
		this.dateOfBooking = dateOfBooking;
		this.timeOfBooking = timeOfBooking;
		this.paymentStatus = paymentStatus;
		this.transactioId = transactioId;
		this.totalAmount = totalAmount;
		this.travellers = travellers;
	}
	
	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public BusSchedule getScheduleId() {
		return scheduleId;
	}

	public void setScheduleId(BusSchedule scheduleId) {
		this.scheduleId = scheduleId;
	}

	public Customer getId() {
		return id;
	}

	public void setId(Customer id) {
		this.id = id;
	}

	public LocalDate getDateOfBooking() {
		return dateOfBooking;
	}

	public void setDateOfBooking(LocalDate dateOfBooking) {
		this.dateOfBooking = dateOfBooking;
	}

	public LocalTime getTimeOfBooking() {
		return timeOfBooking;
	}

	public void setTimeOfBooking(LocalTime timeOfBooking) {
		this.timeOfBooking = timeOfBooking;
	}

	public boolean isPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(boolean paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getTransactioId() {
		return transactioId;
	}

	public void setTransactioId(String transactioId) {
		this.transactioId = transactioId;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Traveller> getTravellers() {
		return travellers;
	}

	public void setTravellers(List<Traveller> travellers) {
		this.travellers = travellers;
	}

	@ElementCollection(fetch = FetchType.EAGER)
    private List<Traveller> travellers = new ArrayList<>();

}
