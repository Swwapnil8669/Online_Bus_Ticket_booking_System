package com.bus.pojos;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="bus_amenities_tb")
public class BusAmenities {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long busAmenitiesId;
	
	 @Column(name="toilet")
	 private boolean toilet;
	 
	 @Column(name="charging_port")
	 private boolean chargingPort;
	 
	 @Column(name="wifi")
	 private boolean wifi;
	 
	 @Column(name="sheets_pillow")
	 private boolean sheetsPillow;
	 
	 @Column(name="complimentary_food")
	 private boolean complimentaryFood;

	public Long getBusAmenitiesId() {
		return busAmenitiesId;
	}

	public void setBusAmenitiesId(Long busAmenitiesId) {
		this.busAmenitiesId = busAmenitiesId;
	}

	public boolean isToilet() {
		return toilet;
	}

	public void setToilet(boolean toilet) {
		this.toilet = toilet;
	}

	public boolean isChargingPort() {
		return chargingPort;
	}

	public void setChargingPort(boolean chargingPort) {
		this.chargingPort = chargingPort;
	}

	public boolean isWifi() {
		return wifi;
	}

	public void setWifi(boolean wifi) {
		this.wifi = wifi;
	}

	public boolean isSheetsPillow() {
		return sheetsPillow;
	}

	public void setSheetsPillow(boolean sheetsPillow) {
		this.sheetsPillow = sheetsPillow;
	}

	public boolean isComplimentaryFood() {
		return complimentaryFood;
	}

	public void setComplimentaryFood(boolean complimentaryFood) {
		this.complimentaryFood = complimentaryFood;
	}

}
