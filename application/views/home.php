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
		<div class="rooms">
			<label for="room">Sala</label>
			<select id="room" ng-model="rooms" ng-change="getChange(rooms)">
				<option value="comedia">Comedia</option>
				<option value="terror">Terror</option>
				<option value="drama">Drama</option>
				<option value="accion">Accion</option>
			</select>
		</div>
		
		<div id="comedia" class="rooms" ng-show="rooms=='comedia'">
			<div class='menu2'>
				<span class='itemenu2 p1'>P1</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-click="logear(item.id)" ng-class="item.clear === 1 ? 'ocupada' : 'p1'" ng-attr-id="{{'s1'+item.id}}">{{item.id}}</td>
				</tr>
			</table>
		</div>


		<div id="terror" class="rooms" ng-show="rooms=='terror'">
			<div class='menu2'>
				<span class='itemenu2 p2'>P1</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-class="item.clear === 1 ? 'ocupada' : 'p2'" ng-attr-id="{{'s2'+item.id}}">{{item.id}}</td>
				</tr>
			</table>
		</div>

		<div id="drama" class="rooms" ng-show="rooms=='drama'">
			<div class='menu2'>
				<span class='itemenu2 p3'>P1</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-class="item.clear === 1 ? 'ocupada' : 'p3'" ng-attr-id="{{'s3'+item.id}}">{{item.id}}</td>
				</tr>
			</table>
		</div>

		<div id="accion" class="rooms" ng-show="rooms=='accion'">
			<div class='menu2'>
				<span class='itemenu2 p4'>P1</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-class="item.clear === 1 ? 'ocupada' : 'p4'" ng-attr-id="{{'s4'+item.id}}">{{item.id}}</td>
				</tr>
			</table>
		</div>


	</div>

</div>

</body>
</html>