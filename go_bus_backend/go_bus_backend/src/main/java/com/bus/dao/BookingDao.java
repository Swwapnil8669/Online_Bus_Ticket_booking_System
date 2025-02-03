package com.bus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bus.pojos.Booking;

public interface BookingDao extends JpaRepository<Booking,Long> {
	
	@Query("select b from Booking b where b.scheduleId.scheduleId=:scheduleId")
	List<Booking> findByScheduleId(Long scheduleId);
	
	@Query("select b from Booking b where b.id.id=:customerId")
	List<Booking> findByCustomerId(Long customerId);
	
	
}
