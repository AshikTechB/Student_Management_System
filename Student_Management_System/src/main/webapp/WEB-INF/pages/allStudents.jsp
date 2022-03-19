<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">



    <title>Student Management Screen</title>
    <link rel="stylesheet" href="styleSheets.css" type="text/css">
    </head>
    <body>
        <div class="header">
            <h1>Student Management System</h1>
            
          </div>
          <div class="navbar">
           
            <div class="rightNav">
                <a  href="viewStaff.html">Home</a>
                <a href="loginNew.html">Logout</a>
            </div>
        </div>
        <div align="center">
            <h1>Student List</h1>
            <table border="1">
                <th>Id</th>
                <th>RollNo</th>
                <th>Name</th>
                <th>DOA</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Biology</th>
                <th>Division</th>
                <th>Result</th>
    
                <c:forEach var="student" items="${listStudent}">
                    <tr>
                        <td>${student.getId()}</td>
                        <td>${student.getRollno()}</td>
                        <td>${student.getName()}</td>
                        <td>${student.getDateOfAdmission()}</td>
                        <td>${student.getPhysics()}</td>
                        <td>${student.getChemistry()}</td>
                        <td>${student.getBiology()}</td>
                        <td>${student.getDivision()}</td>
                        <td>${student.getResult()}</td>
                        <td><a href="editStudent?id=${student.getId()}">Edit</a>
                            &nbsp;&nbsp;&nbsp;&nbsp; <a
                            href="deleteStudent?id=${student.getId()}">Delete</a></td>
                    </tr>
                </c:forEach>
            </table>
            <br/>
             <a href="studentRegistration.html"><button>Add Student</button></a>
        </div>
    </body>
    </html>