package com.bus.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bus.pojos.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long>{

	public Customer findByCustEmailAndCustPassword(String custEmail,String custPassword);
	
	
	public Customer findByCustEmail(String custEmail);
}
