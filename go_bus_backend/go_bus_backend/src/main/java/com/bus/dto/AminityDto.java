package com.bus.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AminityDto {
	
	
	 
	 private boolean toilet;
	 
	
	 private boolean chargingPort;
	 
	 
	 private boolean wifi;
	 
	 
	 private boolean sheetsPillow;
	 
	
	 private boolean complimentaryFood;
}
