<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="styleSheets.css" type="text/css">
</head>
<body>
    <div class="header">
        <h1>Student Management System</h1>
        
      </div>
      <div class="navbar">
       
        <div class="rightNav">
            <a  href="home.html">Home</a>
            <a href="loginNew.html">Logout</a>
        </div>
    </div>
<h1 style="color:brown; text-align:center">${student.getName()}</h1>
<table class="center" border="1">
			<th>RollNo</th>
			<th>Name</th>
			<th>DOA</th>
			<th>Physics</th>
			<th>Chemistry</th>
			<th>Biology</th>
			<th>Division</th>
			<th>Result</th>
			
			<tr>

					<td>${student.getRollno()}</td>
					<td>${student.getName()}</td>
					<td>${student.getDateOfAdmission()}</td>
					<td>${student.getPhysics()}</td>
					<td>${student.getChemistry()}</td>
					<td>${student.getBiology()}</td>
					<td>${student.getDivision()}</td>
					<td>${student.getResult()}</td>
					
				</tr>
				</table>
</body>
</body>
</html>