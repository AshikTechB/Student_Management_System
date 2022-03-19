<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
  <title>Staff Register</title>
    <link rel="stylesheet" href="stylesheets.css" type="text/css">
</head>

 <body>
            <div class="header">
                <h1>Student Management System</h1>
                
              </div>
              <div class="navbar">
                <a  href="home.html">Home</a>
            </div>
            <div align="center">
             
                <h2>Staff Registration</h2>
                <form action="" method="get">
                <table id="table1">
                
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" id="first"/><br><br></td>
                        
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" id="last" /><br><br></td>
                        
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" id="email" /><br><br></td>
                    </tr>
                    <tr>
                        <td>User Id:</td>
                        <td><input type="text" id="uid" /><br><br></td>
              
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" id="password"/><br><br></td>
                      
                    </tr>
                    <tr>
                        <td>Confirm Password:</td>
                        <td><input type="password" id="confirm"  /><br><br></td>
                       
                    </tr>
                    <tr>
                        <td><input type="Submit" id="create" value="Create Account"/></td>
                    </tr>
                </table>
                </form>
            </div>
      
</body>
</html>