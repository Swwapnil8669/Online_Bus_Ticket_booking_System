package com.bus.pojos;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="bus_tb")
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Bus {
	 
	 @Id
	 @Column(name="rto_reg_no",length=10)
	 private String rtoRegNo;
	 
	 @ManyToOne
	 @JoinColumn(name="operator_id")
     private Operator id;
	 
	 @Column(name="seat_capacity")
	 private int seatCapacity;
	 
	 @Column(name="is_ac")
	 private boolean isAc;
	 
	 public String getRtoRegNo() {
		return rtoRegNo;
	}

	public void setRtoRegNo(String rtoRegNo) {
		this.rtoRegNo = rtoRegNo;
	}

	public Operator getId() {
		return id;
	}

	public void setId(Operator id) {
		this.id = id;
	}

	public int getSeatCapacity() {
		return seatCapacity;
	}

	public void setSeatCapacity(int seatCapacity) {
		this.seatCapacity = seatCapacity;
	}

	public boolean isAc() {
		return isAc;
	}

	public void setAc(boolean isAc) {
		this.isAc = isAc;
	}

	public boolean isSleeper() {
		return isSleeper;
	}

	public void setSleeper(boolean isSleeper) {
		this.isSleeper = isSleeper;
	}

	public BusAmenities getBusAmenitiesId() {
		return busAmenitiesId;
	}

	public void setBusAmenitiesId(BusAmenities busAmenitiesId) {
		this.busAmenitiesId = busAmenitiesId;
	}

	public List<BusSchedule> getSchedules() {
		return schedules;
	}

	public void setSchedules(List<BusSchedule> schedules) {
		this.schedules = schedules;
	}

	@Column(name="is_sleeper")
	 private boolean isSleeper;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="bus_amenity_no")
	 private BusAmenities busAmenitiesId; 
	 
	 
	 @OneToMany(mappedBy = "rtoRegNo",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	 private List<BusSchedule> schedules = new ArrayList<>();

	 public void addSchedule(BusSchedule schedule) {
		 
		 schedules.add(schedule);
		 
		 schedule.setRtoRegNo(this);
	 }
	 
	 

}
