<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>New/Edit Contact</title>
</head>
<body>
    <div align="center">
        <h1>New/Edit Student</h1>
        <form:form action="saveStudent" method="post" modelAttribute="student">
        <table>
            <form:hidden path="id"/>
            <tr>
                <td>RollNo:</td>
                <td><form:input path="rollno" /></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><form:input path="name" /></td>
            </tr>
            <tr>
                <td>DoA:</td>
                <td><form:input path="doa" /></td>
            </tr>
            <tr>
                <td>Physics:</td>
                <td><form:input path="physics" /></td>
            </tr>
            <tr>
                <td>Chemistry:</td>
                <td><form:input path="chemistry" /></td>
            </tr>
             <tr>
                <td>Biology</td>
                <td><form:input path="biology" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="Save"></td>
            </tr>
        </table>
        </form:form>
    </div>
</body>
</html>