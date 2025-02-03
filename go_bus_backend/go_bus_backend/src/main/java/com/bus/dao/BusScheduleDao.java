package com.bus.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bus.pojos.BusSchedule;

public interface BusScheduleDao extends JpaRepository<BusSchedule, Long>{
	
	
	public List<BusSchedule> findBySourceCityAndDestinationCityAndDepartureDate(String sourceCity,  String destinationCity,
            LocalDate departureDate);
	
	@Query("select b from BusSchedule b where b.rtoRegNo.rtoRegNo=:rtoRegNoe")
	public List<BusSchedule> findByRtoRegNo(String rtoRegNoe);
  
	
}
