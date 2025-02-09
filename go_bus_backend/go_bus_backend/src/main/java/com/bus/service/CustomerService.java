package com.bus.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bus.dao.BookingDao;
import com.bus.dao.CustomerDao;
import com.bus.dto.ShowBookingDto;
import com.bus.pojos.Booking;
import com.bus.pojos.Customer;

@Service
@Transactional
public class CustomerService {

		@Autowired
		private CustomerDao customerDao;
		
		@Autowired
		private BookingDao bookingDao;
		
		
		
		public List<ShowBookingDto>  showBookings( Long customerId){
			
			
			List<Booking> bookings = bookingDao.findByCustomerId(customerId);
			
			
			
			List<ShowBookingDto> list = new ArrayList<>();
			
			/*
			 * Long bookingId, Customer id, LocalDate dateOfBooking, LocalTime
			 * timeOfBooking, boolean paymentStatus, String transactioId, double
			 * totalAmount, String status, LocalDate departureDate, LocalDate arrivalDate,
			 * LocalTime departureTime, LocalTime arrivalTime, String sourceCity, String
			 * destinationCity)
			 */
			
			bookings.forEach(e->{
				list.add(new ShowBookingDto(e.getBookingId(),e.getId(),e.getDateOfBooking()
						,e.getTimeOfBooking(),e.isPaymentStatus(),e.getTransactioId(),e.getTotalAmount()						
						,e.getStatus(),e.getScheduleId().getDepartureDate(),e.getScheduleId().getArrivalDate()
						,e.getScheduleId().getDepartureTime(),e.getScheduleId().getArrivalTime()
						,e.getScheduleId().getSourceCity(),e.getScheduleId().getDestinationCity(), e.getTravellers()));
			});
			
			
			
			
			return list;
		}
		
		public int deleteBooking(long bookingId) {
			
			Booking booking = bookingDao.findById(bookingId).orElseThrow(()->new RuntimeException("inside customer service/deleteBooking"));
			
			
			
			for(int i = 0;i < booking.getScheduleId().getSeatAllocation().size();i++) {
				
				for(int j = i;j<booking.getTravellers().size();j++) {
					
					if(booking.getScheduleId().getSeatAllocation().get(i).getSeatNo() == 
							booking.getTravellers().get(j).getSeatNo()) {
						
						booking.getScheduleId().getSeatAllocation().get(i).setBooked(false);
					}
				}
			}
			
			booking.setStatus("cancelled");
			
			
			// 1 = cancelled confirm
			return 1;
		}

		public Customer registerCustomer(Customer customer) {
			
			return customerDao.save(customer);
		}
		
		public Customer getCustomer(String email,String pass) {
			
			Customer tempCustomer = customerDao.findByCustEmail(email);
			if(tempCustomer == null)
				return null;
			String hashedPassword = tempCustomer.getCustPassword();
			 Boolean correctLogin =  BCrypt.checkpw(pass, hashedPassword);
			 
			if(!correctLogin)
			return null;
			else
			return tempCustomer ;
		}
	
}
