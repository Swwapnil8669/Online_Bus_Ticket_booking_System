package com.bus.pojos;



import jakarta.persistence.*;
import jakarta.validation.constraints.*;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Table(name="operator_tb")
@Entity
public class Operator extends BaseEntity{
	   
	    @Email 
	    @Column(name="operator_email")
	    @NotEmpty
	    private String operatorEmail;
	    
	    
	    @Column(name="company_name" ,length=50)
	    @NotEmpty
	    private String companyName;
	    
	    public String getOperatorEmail() {
			return operatorEmail;
		}

		public void setOperatorEmail(String operatorEmail) {
			this.operatorEmail = operatorEmail;
		}

		public String getCompanyName() {
			return companyName;
		}

		public void setCompanyName(String companyName) {
			this.companyName = companyName;
		}

		public String getCompanyRegNo() {
			return companyRegNo;
		}

		public void setCompanyRegNo(String companyRegNo) {
			this.companyRegNo = companyRegNo;
		}

		public String getOperatorPhone() {
			return operatorPhone;
		}

		public void setOperatorPhone(String operatorPhone) {
			this.operatorPhone = operatorPhone;
		}

		public String getOperatorUid() {
			return operatorUid;
		}

		public void setOperatorUid(String operatorUid) {
			this.operatorUid = operatorUid;
		}

		public String getOperatorPassword() {
			return operatorPassword;
		}

		public void setOperatorPassword(String operatorPassword) {
			this.operatorPassword = operatorPassword;
		}

		public boolean isApproved() {
			return isApproved;
		}

		public void setApproved(boolean isApproved) {
			this.isApproved = isApproved;
		}

		@Column(name="company_reg_no")
	    @NotEmpty
	    private String companyRegNo;
	    
	    @Column(name="operator_phone")
	    @NotEmpty
	   //@Pattern(regexp = "^(\\+91|\\+91\\-|0)?[789]\\d{9}$")
	    private String operatorPhone;
	    
	    @Column(name="operator_uid")
	    @NotEmpty
	    private String operatorUid;
	    
	    @JsonProperty(access = Access.WRITE_ONLY)
	    @Column(name="operator_password")
	    @NotEmpty
	   //@Pattern(regexp = "^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$")
	    private String operatorPassword;
	    
	    @Column(name="is_approved")
	    private boolean isApproved;
	    
	    
		/*
		 * //@LazyCollection(LazyCollectionOption.FALSE)
		 * 
		 * @ElementCollection
		 * 
		 * @CollectionTable(name="operator_business_location_tb") private
		 * List<OperatorBusinessLocation> businessLocation = new ArrayList<>();
		 */
}
