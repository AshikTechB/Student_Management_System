<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<html>
    <head>
    <meta charset="ISO-8859-1">
    <title>Staff Register</title>
    <link rel="stylesheet" href="styleSheets.css" type="text/css">
    
    </head>
    <body>
    
        <body>
            <div class="header">
                <h1>Student Management System</h1>
                
              </div>
              <div class="navbar">
               
                <div class="rightNav">
                    <a  href="/viewStaff">Back</a>
                    <a href="/staffLogin">Logout</a>
                </div>
            </div>
            <div align="center">
             
                <h2>Update Student Details</h2>
                <form action="" method="get">
                <table id="table">
                
                    <tr>
                        <td>Roll No:</td>
                        <td><input type="text" id="roll" value="student.getRollNo()"/><br><br></td>
                        
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id="name" value="student.getName()"/><br><br></td>
                        
                    </tr>
                    <tr>
                        <td>Date of admission:</td>
                        <td><input type="text" id="doa" value="student.getDateOfAdmission()"/><br><br></td>
                    </tr>
                    <tr>
                        <td>Physics:</td>
                        <td><input type="text" id="physics" value="student.getPhysics()"/><br><br></td>
              
                    </tr>
                    <tr>
                        <td>Chemistry:</td>
                        <td><input type="text" id="chemistry" value="student.getChemistry()"/><br><br></td>
                      
                    </tr>
                    <tr>
                        <td>Biology:</td>
                        <td><input type="text" id="biology"  value="student.getBiology()"/><br><br></td>
                       
                    </tr>
                    
                
                    <tr>
                        <td></td>
                    </tr>
                </table>
                <input type="Submit" id="update" value="Update"/>
                <input type="reset"  value="Reset"/>
                </form>
            </div>
        </body>
        
    </html>