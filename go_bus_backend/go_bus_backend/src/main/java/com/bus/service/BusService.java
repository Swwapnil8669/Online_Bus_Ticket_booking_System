package com.bus.service;

import java.time.LocalDate;
import java.util.List;

import com.bus.dto.SearchResponseDto;
import com.bus.pojos.BusSchedule;
import com.bus.pojos.SeatAllocation;

public interface BusService {

	public List<SearchResponseDto> getBus(String sourceCity,  String destinationCity,
			                                               LocalDate departureDate);
	public List<SeatAllocation> getSeatAllocationList(Long id);
	
}
