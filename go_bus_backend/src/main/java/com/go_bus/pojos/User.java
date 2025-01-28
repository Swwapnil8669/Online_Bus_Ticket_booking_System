package com.go_bus.pojos;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class User extends BaseEntity {
String userName;
String email;
String password;
Date dob;
}
