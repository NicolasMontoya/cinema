<!DOCTYPE html>
<html lang="en" ng-app="myapp">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/cinema/css/styles.css">
	<script src="/cinema/js/jquery.min.js"></script>
	<script src="/cinema/js/angular.min.js"></script>
	<script src="/cinema/js/app.js"></script>

	<title>Cinema</title>

</head>
<body ng-controller="CtrlComedia">

<div id="container">
	<h1>Bienvenido al cinema</h1>

	<div id="body">
		<div class='menu2'>
			<span class='itemenu2 p1'>P1</span>
		</div>
		<table id='park'  style="width: 30%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-class="item.clear === 1 ? 'p1' : 'ocupada'" ng-attr-id="{{'s1'+item.id}}">{{item.id}}</td>
				</tr>
		</table>
		<div class='menu2'>
			<span class='itemenu2 p2'>P1</span>
		</div>
		<table id='park'  style="width: 30%;">
			<tr style="display: inline-block; " ng-repeat="item in items">
				<td ng-class="item.clear === 1 ? 'p2' : 'ocupada'" ng-attr-id="{{'s2'+item.id}}">{{item.id}}</td>
			</tr>
		</table>

	</div>

</div>

</body>
</html>