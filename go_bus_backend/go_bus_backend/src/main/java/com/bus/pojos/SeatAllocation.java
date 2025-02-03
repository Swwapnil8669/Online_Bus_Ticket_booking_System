package com.bus.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class SeatAllocation {

    @Column(name="is_booked")
	private boolean isBooked;
	
    @Column(name="seat_no")
	private int seatNo;
	
    @Column(name="traveller_gender")
	private Gender travellerGender;

	public SeatAllocation(boolean isBooked, int seatNo, Gender travellerGender) {
		super();
		this.isBooked = isBooked;
		this.seatNo = seatNo;
		this.travellerGender = travellerGender;
	}

	

	public boolean isBooked() {
		return isBooked;
	}

	public void setBooked(boolean isBooked) {
		this.isBooked = isBooked;
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

	public Gender getTravellerGender() {
		return travellerGender;
	}

	public void setTravellerGender(Gender travellerGender) {
		this.travellerGender = travellerGender;
	}
    
    

}
