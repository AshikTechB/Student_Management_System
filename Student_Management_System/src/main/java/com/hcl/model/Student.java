package com.hcl.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Student")
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	
	@Column(name="Rollno")
	private int rollno;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="DateOfAdmission")
	private String dateOfAdmission;
	
	@Column(name="Physics")
	private int physics;

	@Column(name="Chemistry")
	private int chemistry;
	
	@Column(name="Biology")
	private int biology;

	@Column(name="Division")
	private String division;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDateOfAdmission() {
		return dateOfAdmission;
	}
	public void setDateOfAdmission(String DateOfAdmission) {
		this.dateOfAdmission = DateOfAdmission;
	}
	public int Physics() {
		return physics;
	}
	public void setBasicpay(int physics) {
		this.physics = physics;
	}
	public int getChemistry() {
		return chemistry;
	}
	public void setChemistry(int chemistry) {
		this.chemistry = chemistry;
	}
	public int getBiology() {
		return biology;
	}
	public void setBiology(int biology) {
		this.biology = biology;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	

	public Student() {}
	
	public Student(int rollno, String name, String dateOfAdmission, int physics, int chemistry, int biology,
			String division) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.dateOfAdmission = dateOfAdmission;
		this.physics = physics;
		this.chemistry = chemistry;
		this.biology = biology;
		this.division = division;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", rollno=" + rollno + ", name=" + name + ", dateOfAdmission=" + dateOfAdmission
				+ ", physics=" + physics + ", chemistry=" + chemistry + ", biology=" + biology + ", division="
				+ division + "]";
	}
	
	
}