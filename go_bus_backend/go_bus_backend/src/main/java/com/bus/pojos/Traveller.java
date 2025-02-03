package com.bus.pojos;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@Embeddable
public class Traveller {

	@Column(name="traveller_gender")
	private Gender Travellergender;
	
	@Column(name="full_name")
	private String fullName;
	
	@Column(name="seat_no")
	private int seatNo;

	public Gender getTravellergender() {
		return Travellergender;
	}

	public void setTravellergender(Gender travellergender) {
		Travellergender = travellergender;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}	
}
