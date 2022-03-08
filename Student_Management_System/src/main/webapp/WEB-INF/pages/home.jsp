<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Student Management System</title>
</head>
<body>
	<div align="center">
		<h1>Student</h1>
		
		<table border="1">

			<th>RollNo</th>
			<th>Name</th>
			<th>Date Of Admission</th>
			<th>Physics</th>
			<th>Chemistry</th>
			<th>Biology</th>
			<th>Division</th>
			<th>Status</th>

			<c:forEach var="Student" items="${listStudent}">
				<tr>

					<td>${student.rollno}</td>
					<td>${student.name}</td>
					<td>${student.doa}</td>
					<td>${student.physics}</td>
					<td>${student.chemistry}</td>
					<td>${student.biology}</td>
					<td>${student.biology}</td>
					<td>${student.biology}</td>
					
					<td><a href="editStudent?id=${student.id}">Edit</a>
						&nbsp;&nbsp;&nbsp;&nbsp; <a
						href="deleteStudent?id=${student.id}">Delete</a></td>

				</tr>
			</c:forEach>
		</table>
		<h4>
			New Student Register <a href="newStudent">here</a>
		</h4>
	</div>
</body>
</html>