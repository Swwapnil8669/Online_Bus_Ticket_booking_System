package com.bus.pojos;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import jakarta.persistence.*;



import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
 

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name="customer_tb")
@ToString
public class Customer extends BaseEntity{
   
	
	@Column(name="cust_first_name",length=50)
	@NotEmpty
	private String custFirstName;
	
	@Column(name="cust_last_name",length=50)
	@NotEmpty
	private String custLastName;
	
    //@Pattern(regexp = "^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$",message="Invalid Password")

	@Column(name="cust_phone")
	@NotEmpty
	//@Pattern(regexp = "^(\\+91|\\+91\\-|0)?[789]\\d{9}$")
	private String custPhone;
	
	public String getCustFirstName() {
		return custFirstName;
	}

	public void setCustFirstName(String custFirstName) {
		this.custFirstName = custFirstName;
	}

	public String getCustLastName() {
		return custLastName;
	}

	public void setCustLastName(String custLastName) {
		this.custLastName = custLastName;
	}

	public String getCustPhone() {
		return custPhone;
	}

	public void setCustPhone(String custPhone) {
		this.custPhone = custPhone;
	}

	public Gender getCustGender() {
		return custGender;
	}

	public void setCustGender(Gender custGender) {
		this.custGender = custGender;
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String custPassword) {
		this.custPassword = custPassword;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	@Enumerated(EnumType.ORDINAL)
	@Column(name="cust_gender")
	//@NotEmpty
    private Gender custGender;
	
	//@Pattern(regexp = "^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$",message="Invalid Password")
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name="cust_password")
	@NotEmpty
    private String custPassword;
	
	@Email
	@Column(name="cust_email")
	@NotEmpty
    private String custEmail;
	
	@Column(name="is_admin")
    private boolean isAdmin; 
    
	@Column(name="cust_dob")
	//@NotEmpty
	private LocalDate dob;
	
}
