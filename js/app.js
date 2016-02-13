var app = angular.module("myapp",[]);
app.controller("CtrlComedia", ['$scope',function($scope, dataHttp){

    $scope.getChange = function(rooms){
        console.log(rooms);
    };
    $scope.items=[
        {id : '0', clear : 0},
        {id : '1', clear : 0},
        {id : '2', clear : 1},
        {id : '3', clear : 0}
    ];
    $scope.logear = function(dt)
    {
        console.log(dt);
    }


}]);
app.factory("dataHttp",['$http', function($http){

}]);