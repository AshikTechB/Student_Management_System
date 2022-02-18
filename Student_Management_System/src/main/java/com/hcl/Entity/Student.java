package com.hcl.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


/*
 * Entity Class With Annotation 
 * To Define The Table Structure Of Database 
 */

@Entity
@Table(name="Student")
@Component
public class Student {
 
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    
    @Column(name="Student_id")
    private int id;
 
    @Column(name="Student_name")
    private String name;
 
    @Column(name="DateOfAdmission")
    private Date dateOfAdmission;
    
    @Column(name="Physics")
    private int physics;
 
    @Column(name="Chemistry")
    private int chemistry;
 
    @Column(name="Biology")
    private int biology;
 
    public Student() { }
 
    public Student(int id, String name, Date dateOfAdmission, int physics, int chemistry, int biology) {
		this.id = id;
		this.name = name;
		this.dateOfAdmission = dateOfAdmission;
		this.physics = physics;
		this.chemistry = chemistry;
		this.biology = biology;
	}
 
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
		this.biology=biology;
 
    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + ", dateOfAdmission=" + dateOfAdmission + ", physics=" + physics + ", chemistry=" + chemistry +", biology=" + biology + "]";
    }
}
