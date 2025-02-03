package com.bus.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bus.dao.BookingDao;
import com.bus.dao.BusScheduleDao;
import com.bus.dao.CustomerDao;
import com.bus.dto.BillingInvoiceDto;
import com.bus.pojos.Booking;
import com.bus.pojos.Bus;
import com.bus.pojos.BusSchedule;
import com.bus.pojos.Customer;
import com.bus.pojos.Operator;
import com.bus.pojos.Traveller;

@Transactional
@Service
public class BookingService {
	
	@Autowired
	private BookingDao bookingDao;
	@Autowired
	private BusScheduleDao scheduleDao;
	@Autowired
	private CustomerDao customerDao;
	
	public BillingInvoiceDto createBooking(Long scheduleId, boolean paymentStatus,
			 String transactioId, List<Traveller> traveller,long id){
		
		if(paymentStatus) {
		
			
			
		BusSchedule schedule = scheduleDao.findById(scheduleId).orElseThrow(()->new RuntimeException("invalid id"));
		
		Customer customer = customerDao.findById(id).orElseThrow(()->new RuntimeException("invalid id"));
		
		Bus bus = schedule.getRtoRegNo();
		
		Operator operator = schedule.getRtoRegNo().getId();
		
	    for(int i = 0;i<traveller.size();i++) {
	    	
	    	//for(int j = 0;j < bus.getSeatAllocation().size();j++)
	    		for(int j = 0;j < schedule.getSeatAllocation().size();j++){
	    		
	    			//if(traveller.get(i).getSeatNo() == bus.getSeatAllocation().get(j).getSeatNo())
	    			//bus.getSeatAllocation().get(j).setBooked(true);
	    			if(traveller.get(i).getSeatNo() == schedule.getSeatAllocation().get(j).getSeatNo()) {
	    			schedule.getSeatAllocation().get(j).setBooked(true);
	    		}
	    		
	    	}
	    }
		double totallAmouont = calculateTotallAmount(schedule.getBusFare(),traveller.size());
		
	/*	BusSchedule scheduleId, Customer id, LocalDate dateOfBooking, LocalTime timeOfBooking,
			int paymentStatus, String transactioId, double totalAmount, List<Traveller> travellers)
	*/
		
		Booking booking = new Booking(schedule,customer,LocalDate.now(),LocalTime.now(),paymentStatus,transactioId,
				totallAmouont,traveller);
		
		Booking persistedBooking = bookingDao.save(booking);
		
		/*
		 * String sourceCity, String destinationCity, String operatorPhone, String
		 * companyName, List<Traveller> travellers, Long bookingId, LocalTime
		 * arrivalTime, LocalTime departureTime, String boardingPoint, String
		 * destinationPoint, double totallFair, LocalDate departureDate, LocalDate
		 * arrivalDate
		 */
		
		BillingInvoiceDto bill = new BillingInvoiceDto(schedule.getSourceCity(),schedule.getDestinationCity()
				,operator.getOperatorPhone(),operator.getCompanyName(),traveller,persistedBooking.getBookingId()
				,schedule.getArrivalTime(),schedule.getDepartureTime(),schedule.getBoardingPoint()
				,schedule.getDestinationPoint(),totallAmouont,schedule.getDepartureDate(),schedule.getArrivalDate());
		
		return bill;
		}else
			return null;
		
	}

	private double calculateTotallAmount(double fair , int count) {
		return fair * count;
	}
	
}
