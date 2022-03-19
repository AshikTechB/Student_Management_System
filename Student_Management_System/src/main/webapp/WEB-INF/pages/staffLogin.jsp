<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
 <link rel="stylesheets" href="styleSheets.css">
 	<div align="center">

        <div class="header">
            <h1>Student Management System</h1>
            
          </div>
          <div class="navbar">
            <a  href="home.html">Home</a>
        </div>
            
          <div>	<h2 >STAFF LOGIN</h2></div>
	
		<br />
		<form action="/viewStaff" method="get">
            <div>
                <label for="userid">User ID </label>
                <input type="text"  id="userid" placeholder="User Id">
            </div>
		<br/> 
            <div>
                <label   for="pwd">Password
                </label>
                <input type="password"  id="pwd" placeholder="Password">
             </div>
             <br/>
		<input type="Submit" id="validate" value="Login">
		<br><br>
		</form>
		New user <a href="registerStaff">register</a>
	</div>
 
</head>
<body>

</body>
</html>