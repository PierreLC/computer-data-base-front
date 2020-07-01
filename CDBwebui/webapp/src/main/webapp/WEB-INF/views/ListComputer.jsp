<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.util.ArrayList"%>

<%@ page isELIgnored="false"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE HTML PUBLIC  "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>Computer Database</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="css/font-awesome.css" rel="stylesheet" media="screen">
<link href="css/main.css" rel="stylesheet" media="screen">

</head>

<body>
	<header class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
	<br></br>
		<a class="navbar-brand" href="ListComputer">Application - <spring:message
				code="label.title" />
		</a>
	</div>


	<script type="text/javascript">
		function googleTranslateElementInit() {
			new google.translate.TranslateElement({
				pageLanguage : 'en'
			}, 'google_translate_element');
		}
	</script>

	<script type="text/javascript"
		src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>



	<script type="text/javascript"
		src="https://translate.google.com/translate_a/element.js? 
        cb=googleTranslateElementInit">
		
	</script>
	</header>


	<section id="main">
	<div class="container">
		<h1 id="homeTitle">
			<c:out value="${sizeComputer}">
			</c:out>
			Computers found
		</h1>
		<div id="actions" class="form-horizontal">
			<div class="pull-left">
				<form id="searchForm" action="#" method="GET" class="form-inline">

					<input type="search" id="searchbox" name="search"
						class="form-control" placeholder="Search name" /> <input
						type="submit" id="searchsubmit" value="Filter by name"
						class="btn btn-primary" />
				</form>
			</div>
			<div class="pull-right">
				<a class="btn btn-success" id="addComputer" href="AddComputer">Add
					Computer</a> <a class="btn btn-default" id="EditComputer" href="#"
					onclick="$.fn.toggleEditMode();">Edit</a>
			</div>
		</div>
	</div>

	<form id="deleteForm" action="ListComputer?ListComputer" method="POST">
		<input type="hidden" name="selection" value="">
	</form>

	<div class="container" style="margin-top: 10px;">
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<!-- Variable declarations for passing labels as parameters -->
					<!-- Table header for Computer Name -->

					<th class="editMode" style="width: 60px; height: 22px;"><input
						type="checkbox" id="selectall" /> <span
						style="vertical-align: top;"> - <a href="#"
							id="deleteSelected" onclick="$.fn.deleteSelected();"> <i
								class="fa fa-trash-o fa-lg"></i>
						</a>
					</span></th>
					<th><a href="ListComputer?order=Computer">Computer name</a></th>
					<th><a href="ListComputer?order=Introduced">Introduced
							date</a></th>
					<th><a href="ListComputer?order=Discontinued">
							Discontinued date</a></th>
					<th><a href="ListComputer?order=Company">Company</a></th>

				</tr>
			</thead>
			<tbody id="results">

				<c:forEach items="${computerList}" var="computer">
					<tr>
						<td class="editMode"><input type="checkbox" name="cb"
							class="cb" value=${computer.id}></td>
						<td><a href="EditComputer?computerid=${computer.id}"
							onclick=""><c:out value="${computer.name}"></c:out></a></td>
						<td><c:out value="${computer.introduced}"></c:out></td>
						<td><c:out value="${computer.discontinued}"></c:out></td>
						<td><c:out value="${computer.company.name}"></c:out></td>
					</tr>
				</c:forEach>

			</tbody>
		</table>
	</div>
	</section>

	<footer class="navbar-fixed-bottom">
	<div class="container text-center">
		<ul class="pagination">
			<li><c:if test="${pageIterator>0}">
					<a
						href="ListComputer?pageIterator=${pageIterator-1}&search=${search}"
						aria-label="Previous"> <span aria-hidden="true">&laquo;</span>
					</a>
				</c:if></li>
			<c:forEach var="i" begin="1" end="5">
				<li><a
					href="ListComputer?pageIterator=${pageIterator+i}&search=${search}"><c:out
							value="${pageIterator+i}"></c:out></a></li>
			</c:forEach>
			<li><c:if test="${pageIterator<maxPage}">
					<a
						href="ListComputer?pageIterator=${pageIterator+1}&search=${search}"
						aria-label="Next"> <span aria-hidden="true">&raquo;</span>
					</a>
				</c:if></li>
		</ul>
	</div>

	<div class="btn-group btn-group-sm pull-right" role="group">
		<button type="button" class="btn btn-default">
			<a href="ListComputer?taillePage=10">10</a>
		</button>
		<button type="button" class="btn btn-default">
			<a href="ListComputer?taillePage=50">50</a>
		</button>
		<button type="button" class="btn btn-default">
			<a href="ListComputer?taillePage=100">100</a>
		</button>
	</div>
	</footer>

	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/dashboard.js"></script>


</body>
</html>