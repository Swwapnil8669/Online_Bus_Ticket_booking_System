package com.bus.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import com.bus.pojos.Customer;

public class CustomUserDetailsImpl implements UserDetails {
	private Customer userEntity;
	

	public CustomUserDetailsImpl(Customer userEntity) {
		super();
		this.userEntity = userEntity;
	}

//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return List.of
//				(new SimpleGrantedAuthority(
//						userEntity.getRole().name()));
//	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return userEntity.getCustPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userEntity.getCustEmail();
	}

	public Customer getUserEntity() {
		return userEntity;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
