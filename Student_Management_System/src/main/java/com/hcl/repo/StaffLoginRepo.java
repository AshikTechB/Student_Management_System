package com.hcl.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.model.StaffLogin;

public interface StaffLoginRepo extends JpaRepository<StaffLogin,String>{

}
