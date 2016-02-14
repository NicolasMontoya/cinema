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
<body ng-controller="CtrlBase">

<div id="container">
	<h1>Bienvenido al cinema</h1>
	<a href="/cinema/control">Eliminar reservas</a>

	<div id="body">
		<br>
		<div ng-show="rooms == 'accion' || rooms == 'drama' || rooms == 'terror' || rooms == 'comedia'">

			<h3>Dinero : {{cash}}</h3>
			<h3>Dinero por preferencial: {{pCash}}</h3>
			<h3>Dinero por tiquete normal: {{cCash}}</h3>
			<h3>Personas : {{person}}</h3>
			<label for="dates">Fecha</label>
			<input id="dates" ng-model="date" type="date">
			<button ng-click="getElementByDate()">Buscar</button>
		</div>

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
				<span class='itemenu2 p1'>DISPONIBLE</span>
				<span class='itemenu2 ocupada'>OCUPADO</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-click="clikerar(item.silla , item.state)" ng-class="item.state === 1 ? 'ocupada' : 'p1'" ng-attr-id="{{'c-'+item.silla}}">{{item.silla}}</td>
				</tr>
			</table>
		</div>


		<div id="terror" class="rooms" ng-show="rooms=='terror'">
			<div class='menu2'>
				<span class='itemenu2 p2'>DISPONIBLE</span>
				<span class='itemenu2 ocupada'>OCUPADO</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-click="clikerar(item.silla , item.state)" ng-class="item.state === 1 ? 'ocupada' : 'p2'" ng-attr-id="{{'t-'+item.silla}}">{{item.silla}}</td>
				</tr>
			</table>
		</div>

		<div id="drama" class="rooms" ng-show="rooms=='drama'">
			<div class='menu2'>
				<span class='itemenu2 p3'>DISPONIBLE</span>
				<span class='itemenu2 ocupada'>OCUPADO</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-click="clikerar(item.silla , item.state)" ng-class="item.state === 1 ? 'ocupada' : 'p3'" ng-attr-id="{{'d-'+item.silla}}">{{item.silla}}</td>
				</tr>
			</table>
		</div>

		<div id="accion" class="rooms" ng-show="rooms=='accion'">
			<div class='menu2'>
				<span class='itemenu2 p4'>DISPONIBLE</span>
				<span class='itemenu2 ocupada'>OCUPADO</span>
			</div>
			<table id='park'  style="width: 25%;">
				<tr style="display: inline-block; " ng-repeat="item in items">
					<td ng-click="clikerar(item.silla , item.state)" ng-class="item.state === 1 ? 'ocupada' : 'p4'" ng-attr-id="{{'a-'+item.silla}}">{{item.silla}}</td>
				</tr>
			</table>
		</div>

		<form class="rooms" ng-show="rooms == 'accion' || rooms == 'drama' || rooms == 'terror' || rooms == 'comedia'">
			<p>Sistema de reservas</p>
			<label for="registro">Nombre</label>
			<input id="registro" ng-bind="ajax1" ng-model="nameSubmit" type="text">
			<br>
			<br>
			<label for="registro">Ciudad</label>
			<input id="registro" ng-bind="ajax2" ng-model="citySubmit" type="text">
			<br>
			<br>
			<label for="registro">Modo</label>
			<select id="registro" ng-model="mode" autofocus>
				<option value="0">Reservar</option>
				<option value="1">Eliminar</option>
			</select>
			<br>
			<br>
			<label for="registro">Sillas</label>
			<p id="others" ng-bind="chairs"></p>
			<br>
			<br>

			<button ng-click="reservar(rooms)">Reservar</button>
		</form>


	</div>

</div>

</body>
</html>