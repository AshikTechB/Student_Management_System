package com.hcl;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
/*
 * Maven Based Project Using Technology
 * 1.Spring Boot Application
 * 2.Spring Data JPA For Database
 * 3.Angular For All The UI
 */

@SpringBootApplication(scanBasePackages = {"com.hcl"})
public class StudentRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentRestApplication.class, args);
	}

}
