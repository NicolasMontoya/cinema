var app = angular.module("myapp",[]);
app.controller("CtrlComedia", ['$scope',function($scope){
    $scope.items = [
        {id : '0', clear:1},
        {id : '1', clear:0},
        {id : '2', clear:0},
        {id : '3', clear:1},
        {id : '4', clear:0},
        {id : '5', clear:0},
        {id : '6', clear:0},
        {id : '7', clear:1},
        {id : '8', clear:0}
    ];
}]);