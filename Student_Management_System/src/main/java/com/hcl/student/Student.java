package com.hcl.student;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="student")
public class Student {
	@Id
	private int id;
    private String name;
    @Temporal(TemporalType.DATE)
    private Date dateOfAdmission;
    private int physics;
    private int chemistry;
    private int biology;
    
    public Student() {}

	public Student(int id, String name, Date dateOfAdmission, int physics, int chemistry, int biology) {
		this.id = id;
		this.name = name;
		this.dateOfAdmission = dateOfAdmission;
		this.physics = physics;
		this.chemistry = chemistry;
		this.biology = biology;
	}
//comment
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

	public Date getDateOfAdmission() {
		return dateOfAdmission;
	}

	public void setDateOfAdmission(Date dateOfAdmission) {
		this.dateOfAdmission = dateOfAdmission;
	}

	public int getPhysics() {
		return physics;
	}

	public void setPhysics(int physics) {
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
    
}
