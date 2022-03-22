package com.hcl.model;

import javax.persistence.Column;  
import javax.persistence.Entity;  
import javax.persistence.GeneratedValue;  
import javax.persistence.GenerationType;  
import javax.persistence.Id;  
import javax.persistence.Table;  


@Entity
@Table(name="Staff")
public class StaffLogin {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="userid")
	private int userid;
	
	@Column(name="email" , unique=true)  
    public String email;
	
	@Column(name="fname" )  
    public String fname; 
	
	@Column(name="lname")  
    public String lname;
	
	@Column(name="phne" , unique=true)  
    public int phone; 
	
	@Column(name="address")  
    public String address; 
	
	@Column(name="password")  
    public String password;

	public StaffLogin() {}
	
	public StaffLogin(int userid, String email, String fname, String lname, int phone, String address,
			String password) {
		super();
		this.userid = userid;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.address = address;
		this.password = password;
	}


	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "StaffLogin [userid=" + userid + ", email=" + email + ", fname=" + fname + ", lname=" + lname
				+ ", phone=" + phone + ", address=" + address + ", password=" + password + "]";
	} 
	
	
	
	
}
