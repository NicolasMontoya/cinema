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
<body ng-controller="CtrlControl">
<div id="container">
    <h1>Bienvenido al sistema de eliminacion de reservas</h1>
    <a href="/cinema"> Cinema APP</a>
    <div id="body">
        <div class="rooms">
            <label for="room">Sala</label>
            <select id="room" ng-model="rooms">
                <option value="comedia">Comedia</option>
                <option value="terror">Terror</option>
                <option value="drama">Drama</option>
                <option value="accion">Accion</option>
            </select>
            <p>     </p>
            <label for="dates">Fecha</label>
            <input id="dates" ng-model="date" type="date">
            <button ng-click="getElements(rooms, date)">Buscar</button>

        </div>
        <br>
        <br>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Tipo</th>
                <th>Silla</th>
                <th>Delete</th>
            </tr>
            <tbody ng-repeat="item in items">
                <tr>
                    <td>{{item.nombre}}</td>
                    <td>{{item.ciudad}}</td>
                    <td>{{item.tipo}}</td>
                    <td>{{item.silla}}</td>
                    <td><button ng-click="deleteElement(rooms,item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</body>
</html>