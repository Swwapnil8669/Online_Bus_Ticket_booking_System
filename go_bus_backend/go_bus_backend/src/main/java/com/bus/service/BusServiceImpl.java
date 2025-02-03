package com.bus.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Propagation;

import com.bus.dao.BusScheduleDao;
import com.bus.dto.SearchResponseDto;
import com.bus.pojos.BusAmenities;
import com.bus.pojos.BusSchedule;
import com.bus.pojos.Operator;
import com.bus.pojos.SeatAllocation;

@org.springframework.transaction.annotation.Transactional
@Service
public class BusServiceImpl implements BusService {
	
	@Autowired
	private BusScheduleDao dao;

//(String companyName, boolean isAc, boolean isSleeper, BusAmenities busAmenities,
//double busFair, LocalTime arrivalTime, LocalTime departureTime, List<SeatAllocation> seats)
	
	
	@Override
	public List<SearchResponseDto> getBus(String sourceCity, String destinationCity, LocalDate departureDate) {
		
		List<SearchResponseDto> searchDtoList = new ArrayList<>();
		
		List<BusSchedule> list = dao.findBySourceCityAndDestinationCityAndDepartureDate(sourceCity, destinationCity, departureDate);
        
		/*
		 * Long scheduleId, String sourceCity, String destinationCity, LocalDate
		 * departureDate, String companyName, boolean isAc, boolean isSleeper,
		 * BusAmenities busAmenities, double busFare, LocalTime arrivalTime, LocalTime
		 * departureTime, List<SeatAllocation> seats
		 */
		
		list.forEach(e->{
			Operator o = e.getRtoRegNo().getId();
			
			e.getSeatAllocation().size();
			
			
		    searchDtoList.add(new SearchResponseDto(e.getArrivalDate(),e.getDestinationPoint(),e.getBoardingPoint(),e.getScheduleId(),e.getSourceCity(),e.getDestinationCity(),e.getDepartureDate(),o.getCompanyName(),e.getRtoRegNo().isAc(),
		    		e.getRtoRegNo().isSleeper(),e.getRtoRegNo().getBusAmenitiesId(),
		    		e.getBusFare(),e.getArrivalTime(),e.getDepartureTime(),e.getSeatAllocation()));
		}); 
		
		return searchDtoList;
	}

	@Override
	public List<SeatAllocation> getSeatAllocationList(Long id) {
		
		List<SeatAllocation> list = new ArrayList<>();
		
		BusSchedule busSchedule = dao.findById(id).orElseThrow(()->new RuntimeException("not found"));
	    
		list = busSchedule.getSeatAllocation();
	    
		list.size();
		
		return list;
	}
}
