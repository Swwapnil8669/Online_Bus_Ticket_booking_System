package com.bus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.bus.pojos.Bus;

public interface BusDao extends JpaRepository<Bus, String> {
	
	//b.id -> is object and b.id.id is calling long id from inside that object                                                      
	@Query("select b from Bus b where b.id.id=:operatorId")
	public List<Bus> findByOperatorId(long operatorId);
	
	@Query("SELECT b FROM Bus b WHERE b.rtoRegNo=:rtoRegNoe")
	public Bus findByRtoRegNo(String rtoRegNoe);

}
