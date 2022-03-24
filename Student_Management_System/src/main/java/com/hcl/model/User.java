package com.hcl.model;




import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_detail")
public class User {
    /*
     *  
    */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userid")
    private long id;
    
    @Column(name = "fname")
    private final String fname;
    
    
    @Column(name = "lname")
    private final String lname;
    
    @Column(name = "phone")
    private final Long phone;
    
    @Column(name = "email")
    private final String email;
    
    @Column(name = "address")
    private final String address;
    
    @Column (name="username")
    private final String username;

	@Column(name = "password")
    private final String password;
	
   
	
    public User(String fname, String lname, Long phone, String email, String address,String username ,String password) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.email = email;
		this.username=username;
		this.password = password;
		this.address = address;
	}

	public User() {
		this.fname = "";
		this.lname = "";
		this.phone = 0L;
		this.email = "";
		this.username="";
		this.password = "";
		this.address = "";
    }
    
  
    public User(long id, String fname, String lname, Long phone, String email, String address, String username,
			String password) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.username = username;
		this.password = password;
	}

	public long getId() {
        return id;
    }

	public String getFname() {
		return fname;
	}

	public String getLname() {
		return lname;
	}

	public Long getPhone() {
		return phone;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public String getAddress() {
		return address;
	}
	public String getUsername() {
		return username;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", fname=" + fname + ", lname=" + lname + ", phone=" + phone + ", email=" + email
				+ ", password=" + password + ", address=" + address + "]";
	}
    
  
   
}
