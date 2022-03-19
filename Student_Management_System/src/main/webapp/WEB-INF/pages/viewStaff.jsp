<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert </title>
<link rel="stylesheet" href="styleSheets.css">
</head>
<body>
    <div class="header">
        <h1>Student Management System</h1>
        
      </div>
      <div class="navbar">
       
        <div class="rightNav">
            
            <a href="/home">Logout</a>
        </div>
    </div>
    <div class="stfView">
        
        <form action ="Search">
           
            <input type="number" placeholder="Student-Id" name ="stdId">
            <button type="submit">Show details</button>
        </form>
        <form action="allstudent" method="post">
            <button type="submit">View All Students</button>
        </form>
        
            <a href="newStudent"><button>Add Student</button></a>
    </div>
<div  >

</div>

</body>
</html>