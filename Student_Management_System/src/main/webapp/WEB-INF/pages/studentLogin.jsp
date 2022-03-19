<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheets" href="styleSheets.css">
</head>
<body>
	<div align="center">

        <div class="header">
            <h1>Student Management System</h1>
            
          </div>
          <div class="navbar">
            <a  href="home.html">Home</a>
        </div>
            
          <div>	<h2 >Student Login</h2></div>
	
		<br />
		<form action="/home" method="get">
            <div class="form-group">
                <label for="userid">Username</label>
                <input type="text"  id="userid" placeholder="Username">
            </div>
		<br/> 
            <div class="form-group">
                <label   for="pwd">Password
                </label>
                <input type="password"  id="pwd" placeholder="Password">
             </div>
             <br/>
		<input type="Submit" id="validate" value="Login">
		<br><br>
		</form>
	
	</div>

</body>
</html>