var app = angular.module("myapp",[]);
app.controller("CtrlBase", ['$scope','getData','setData',function($scope, getData, setData){

    var array = new Array();
    var key = 0;
    function option(elements, i)
    {
        var array = new Array(2);
        array['bool'] = false;
        if(elements.length == 0)
        {
            return false;
        }
        else
        {
            for(var j = 0; j < elements.length;j++ )
            {
                if(i == elements[j].silla)
                {
                    array['tipo'] = elements[j].tipo;
                    array['bool'] =true;
                    return array;
                }
            }
            return array;
        }
    }

    $scope.getChange = function(rooms){
        console.log(rooms);
        if(rooms=='comedia')
        {
            array =[];
            key=0;
            $scope.chairs = '';
            getData.comedy('now').success(function(response){
                var control;
                var number=0;
                var moneyC=0;
                var moneyP=0;
                var l=0;
                var container = new Array(100);
                for(var i=0;i<100;i++)
                {
                    container[i] = new Object();
                    control = option(response,i);
                    if(control['bool']==true)
                    {
                        number++;
                        container[i].state = 1;
                        container[i].silla = i;
                        console.log(control);
                        if(control['tipo']=='1')
                        {
                            moneyP = moneyP + (12000*0.2) + 12000;
                        }
                        else
                        {
                            moneyC = moneyC + 12000;
                        }
                    }
                    else
                    {
                        container[i].state = 0;
                        container[i].silla = i;
                    }
                }
                $scope.items = container;
                $scope.cash = moneyC+moneyP;
                $scope.pCash = moneyP;
                $scope.cCash = moneyC;
                $scope.person = number;
            });
        }
        else if(rooms=='terror')
        {
            array =[];
            key=0;
            $scope.chairs = '';
            getData.terror('now').success(function(response){
                var control;
                var number=0;
                var moneyC=0;
                var moneyP=0;
                var l=0;
                var container = new Array(120);
                for(var i=0;i<120;i++)
                {
                    container[i] = new Object();
                    control = option(response,i);
                    if(control['bool']==true)
                    {
                        number++;
                        container[i].state = 1;
                        container[i].silla = i;
                        console.log(control);
                        if(control['tipo']=='1')
                        {
                            moneyP = moneyP + (10000*0.2) + 10000;
                        }
                        else
                        {
                            moneyC = moneyC + 10000;
                        }
                    }
                    else
                    {
                        container[i].state = 0;
                        container[i].silla = i;
                    }
                }
                $scope.items = container;
                $scope.cash = moneyC+moneyP;
                $scope.pCash = moneyP;
                $scope.cCash = moneyC;
                $scope.person = number;
            });
        }
        else if(rooms=='drama')
        {
            array =[];
            key=0;
            $scope.chairs = '';
            getData.drama('now').success(function(response){
                var control;
                var number=0;
                var moneyC=0;
                var moneyP=0;
                var l=0;
                var container = new Array(60);
                for(var i=0;i<60;i++)
                {
                    container[i] = new Object();
                    control = option(response,i);
                    if(control['bool']==true)
                    {
                        number++;
                        container[i].state = 1;
                        container[i].silla = i;
                        console.log(control);
                        if(control['tipo']=='1')
                        {
                            moneyP = moneyP + (15000*0.2) + 15000;
                        }
                        else
                        {
                            moneyC = moneyC + 15000;
                        }
                    }
                    else
                    {
                        container[i].state = 0;
                        container[i].silla = i;
                    }
                }
                $scope.items = container;
                $scope.cash = moneyC+moneyP;
                $scope.pCash = moneyP;
                $scope.cCash = moneyC;
                $scope.person = number;
            });
        }
        else if(rooms=='accion')
        {
            array =[];
            key=0;
            $scope.chairs = '';
            getData.accion('now').success(function(response){
                var control;
                var number=0;
                var moneyC=0;
                var moneyP=0;
                var l=0;
                var container = new Array(80);
                for(var i=0;i<80;i++)
                {
                    container[i] = new Object();
                    control = option(response,i);
                    if(control['bool']==true)
                    {
                        number++;
                        container[i].state = 1;
                        container[i].silla = i;
                        console.log(control);
                        if(control['tipo']=='1')
                        {
                            moneyP = moneyP + (14000*0.2) + 14000;
                        }
                        else
                        {
                            moneyC = moneyC + 14000;
                        }
                    }
                    else
                    {
                        container[i].state = 0;
                        container[i].silla = i;
                    }
                }
                $scope.items = container;
                $scope.cash = moneyC+moneyP;
                $scope.pCash = moneyP;
                $scope.cCash = moneyC;
                $scope.person = number;
            });
        }

    };
    $scope.getElementByDate = function() {
        var date = $scope.date;
        if(date != undefined)
        {
            if($scope.rooms=='comedia')
            {
                getData.comedy(date).success(function(response){
                    var control;
                    var number=0;
                    var moneyC=0;
                    var moneyP=0;
                    var l=0;
                    var container = new Array(100);
                    for(var i=0;i<100;i++)
                    {
                        container[i] = new Object();
                        control = option(response,i);
                        if(control['bool']==true)
                        {
                            number++;
                            container[i].state = 1;
                            container[i].silla = i;
                            console.log(control);
                            if(control['tipo']=='1')
                            {
                                moneyP = moneyP + (12000*0.2) + 12000;
                            }
                            else
                            {
                                moneyC = moneyC + 12000;
                            }
                        }
                        else
                        {
                            container[i].state = 0;
                            container[i].silla = i;
                        }
                    }
                    $scope.items = container;
                    $scope.cash = moneyC+moneyP;
                    $scope.pCash = moneyP;
                    $scope.cCash = moneyC;
                    $scope.person = number;
                });
            }
            else if($scope.rooms=='terror')
            {
                getData.terror(date).success(function(response){
                    var control;
                    var number=0;
                    var moneyC=0;
                    var moneyP=0;
                    var l=0;
                    var container = new Array(120);
                    for(var i=0;i<120;i++)
                    {
                        container[i] = new Object();
                        control = option(response,i);
                        if(control['bool']==true)
                        {
                            number++;
                            container[i].state = 1;
                            container[i].silla = i;
                            console.log(control);
                            if(control['tipo']=='1')
                            {
                                moneyP = moneyP + (10000*0.2) + 10000;
                            }
                            else
                            {
                                moneyC = moneyC + 10000;
                            }
                        }
                        else
                        {
                            container[i].state = 0;
                            container[i].silla = i;
                        }
                    }
                    $scope.items = container;
                    $scope.cash = moneyC+moneyP;
                    $scope.pCash = moneyP;
                    $scope.cCash = moneyC;
                    $scope.person = number;
                });
            }
            else if($scope.rooms=='drama')
            {
                getData.drama(date).success(function(response){
                    var control;
                    var number=0;
                    var moneyC=0;
                    var moneyP=0;
                    var l=0;
                    var container = new Array(60);
                    for(var i=0;i<60;i++)
                    {
                        container[i] = new Object();
                        control = option(response,i);
                        if(control['bool']==true)
                        {
                            number++;
                            container[i].state = 1;
                            container[i].silla = i;
                            console.log(control);
                            if(control['tipo']=='1')
                            {
                                moneyP = moneyP + (15000*0.2) + 15000;
                            }
                            else
                            {
                                moneyC = moneyC + 15000;
                            }
                        }
                        else
                        {
                            container[i].state = 0;
                            container[i].silla = i;
                        }
                    }
                    $scope.items = container;
                    $scope.cash = moneyC+moneyP;
                    $scope.pCash = moneyP;
                    $scope.cCash = moneyC;
                    $scope.person = number;
                });
            }
            else if($scope.rooms=='accion')
            {
                getData.accion(date).success(function(response){
                    var control;
                    var number=0;
                    var moneyC=0;
                    var moneyP=0;
                    var l=0;
                    var container = new Array(80);
                    for(var i=0;i<80;i++)
                    {
                        container[i] = new Object();
                        control = option(response,i);
                        if(control['bool']==true)
                        {
                            number++;
                            container[i].state = 1;
                            container[i].silla = i;
                            console.log(control);
                            if(control['tipo']=='1')
                            {
                                moneyP = moneyP + (14000*0.2) + 14000;
                            }
                            else
                            {
                                moneyC = moneyC + 14000;
                            }
                        }
                        else
                        {
                            container[i].state = 0;
                            container[i].silla = i;
                        }
                    }
                    $scope.items = container;
                    $scope.cash = moneyC+moneyP;
                    $scope.pCash = moneyP;
                    $scope.cCash = moneyC;
                    $scope.person = number;
                });
            }
        }
    };
    $scope.clikerar = function(dt, de) {

        if(de == 0)
        {
            $scope.chairs = '';
            if($scope.mode == '1' )
            {
                var index = array.indexOf(dt);
                if(index > -1)
                {
                    array.splice(index, 1);
                    key--;
                    console.log(array);
                }
            }
            else if($scope.mode == '0' )
            {
                var indexA = array.indexOf(dt);
                if(!(indexA > -1))
                {
                    array[key] = dt;
                    key++;
                    console.log($scope.items[dt].state);
                }

            }
            for(var i=0; i< array.length;i++)
            {
                $scope.chairs =$scope.chairs + ' ' + array[i] + ',';
            }

        }
    };
    $scope.reservar = function(rooms){
        console.log(rooms);
        var name = $scope.nameSubmit;
        var city = $scope.citySubmit;
        if(name != '' && city != '' && array.length > 0)
        {

            if(rooms == 'comedia')
            {
                setData.comedia(name,city,array,$scope.date).success(function(response){
                    console.log(response);
                    getData.comedy(response['date']).success(function(response){
                        var control;
                        var number=0;
                        var moneyC=0;
                        var moneyP=0;
                        var l=0;
                        var container = new Array(100);
                        for(var i=0;i<100;i++)
                        {
                            container[i] = new Object();
                            control = option(response,i);
                            if(control['bool']==true)
                            {
                                number++;
                                container[i].state = 1;
                                container[i].silla = i;
                                console.log(control);
                                if(control['tipo']=='1')
                                {
                                    moneyP = moneyP + (12000*0.2) + 12000;
                                }
                                else
                                {
                                    moneyC = moneyC + 12000;
                                }
                            }
                            else
                            {
                                container[i].state = 0;
                                container[i].silla = i;
                            }
                        }
                        $scope.items = container;
                        $scope.cash = moneyC+moneyP;
                        $scope.pCash = moneyP;
                        $scope.cCash = moneyC;
                        $scope.person = number;
                    });
                    $scope.nameSubmit = '';
                    $scope.citySubmit = '';
                    $scope.chairs = '';
                    array = [];
                    key = 0;
                });
            }
            else if(rooms == 'terror')
            {
                setData.terror(name,city,array,$scope.date).success(function(response){
                    console.log(response);
                    getData.terror(response['date']).success(function(response){
                        var control;
                        var number=0;
                        var moneyC=0;
                        var moneyP=0;
                        var l=0;
                        var container = new Array(120);
                        for(var i=0;i<120;i++)
                        {
                            container[i] = new Object();
                            control = option(response,i);
                            if(control['bool']==true)
                            {
                                number++;
                                container[i].state = 1;
                                container[i].silla = i;
                                console.log(control);
                                if(control['tipo']=='1')
                                {
                                    moneyP = moneyP + (10000*0.2) + 10000;
                                }
                                else
                                {
                                    moneyC = moneyC + 10000;
                                }
                            }
                            else
                            {
                                container[i].state = 0;
                                container[i].silla = i;
                            }
                        }
                        $scope.items = container;
                        $scope.cash = moneyC+moneyP;
                        $scope.pCash = moneyP;
                        $scope.cCash = moneyC;
                        $scope.person = number;
                    });
                    $scope.nameSubmit = '';
                    $scope.citySubmit = '';
                    $scope.chairs = '';
                    array = [];
                    key = 0;
                });
            }
            else if(rooms == 'drama')
            {
                setData.drama(name,city,array,$scope.date).success(function(response){
                    console.log(response);
                    getData.drama(response['date']).success(function(response){
                        var control;
                        var number=0;
                        var moneyC=0;
                        var moneyP=0;
                        var l=0;
                        var container = new Array(60);
                        for(var i=0;i<60;i++)
                        {
                            container[i] = new Object();
                            control = option(response,i);
                            if(control['bool']==true)
                            {
                                number++;
                                container[i].state = 1;
                                container[i].silla = i;
                                console.log(control);
                                if(control['tipo']=='1')
                                {
                                    moneyP = moneyP + (15000*0.2) + 15000;
                                }
                                else
                                {
                                    moneyC = moneyC + 15000;
                                }
                            }
                            else
                            {
                                container[i].state = 0;
                                container[i].silla = i;
                            }
                        }
                        $scope.items = container;
                        $scope.cash = moneyC+moneyP;
                        $scope.pCash = moneyP;
                        $scope.cCash = moneyC;
                        $scope.person = number;
                    });
                    $scope.nameSubmit = '';
                    $scope.citySubmit = '';
                    $scope.chairs = '';
                    array = [];
                    key = 0;
                });
            }
            else if(rooms == 'accion')
            {
                setData.accion(name,city,array,$scope.date).success(function(response){
                    console.log(response);
                    getData.accion(response['date']).success(function(response){
                        var control;
                        var number=0;
                        var moneyC=0;
                        var moneyP=0;
                        var l=0;
                        var container = new Array(80);
                        for(var i=0;i<80;i++)
                        {
                            container[i] = new Object();
                            control = option(response,i);
                            if(control['bool']==true)
                            {
                                number++;
                                container[i].state = 1;
                                container[i].silla = i;
                                console.log(control);
                                if(control['tipo']=='1')
                                {
                                    moneyP = moneyP + (14000*0.2) + 14000;
                                }
                                else
                                {
                                    moneyC = moneyC + 14000;
                                }
                            }
                            else
                            {
                                container[i].state = 0;
                                container[i].silla = i;
                            }
                        }
                        $scope.items = container;
                        $scope.cash = moneyC+moneyP;
                        $scope.pCash = moneyP;
                        $scope.cCash = moneyC;
                        $scope.person = number;
                    });
                    $scope.nameSubmit = '';
                    $scope.citySubmit = '';
                    $scope.chairs = '';
                    array = [];
                    key = 0;
                });
            }
        }
        else
        {
            alert('Ingrese todos los campos');
        }

    };


}]);
app.controller("CtrlControl",['$scope','getData','deleteData',function($scope, getData, deleteData){
    $scope.getElements = function(room, date){
          if(room == 'comedia')
          {
                if(date != undefined)
                {
                    getData.comedy(date).success(function(response){$scope.items=response;});
                }
                else
                {
                    alert('Ingrese una fecha');
                }
          }
          else  if(room == 'terror')
          {
              if(date != undefined)
              {
                  getData.terror(date).success(function(response){$scope.items=response;});
              }
              else
              {
                  alert('Ingrese una fecha');
              }
          }
          else if(room == 'drama')
          {
              if(date != undefined)
              {
                  getData.drama(date).success(function(response){$scope.items=response;});
              }
              else
              {
                  alert('Ingrese una fecha');
              }
          }
          else if(room =='accion')
          {
              if(date != undefined)
              {
                  getData.accion(date).success(function(response){$scope.items=response;});
              }
              else
              {
                  alert('Ingrese una fecha');
              }
          }
        else
          {
              alert('Ingrese una sala');
          }

    };
    $scope.deleteElement = function(room, id){
        deleteData.delete(room,id).success(function(response){
            deleteData.get(room,$scope.date).success(function(response){
                $scope.items = response;
            });
            console.log(response);
        });
    };
}]);
app.factory('getData',function($http){
    return{
        comedy : function(date){
            return $http({
                method:'post',
                url:'/cinema/get/comedia',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date}
            })
        },
        terror : function(date){
            return $http({
                method:'post',
                url:'/cinema/get/terror',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date}
            })
        },
        drama : function(date){
            return $http({
                method:'post',
                url:'/cinema/get/drama',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date}
            })
        },
        accion : function(date){
            return $http({
                method:'post',
                url:'/cinema/get/accion',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date}
            })
        }
    }
});
app.factory('setData',function($http) {
    return {
        comedia : function(name, city, datos, date)
        {
            return $http({
                method:'post',
                url:'/cinema/set/comedia',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date, name:name,city:city,datos:datos}
            })
        },
        terror : function(name, city, datos, date)
        {
            return $http({
                method:'post',
                url:'/cinema/set/terror',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date, name:name,city:city,datos:datos}
            })
        },
        drama : function(name, city, datos, date)
        {
            return $http({
                method:'post',
                url:'/cinema/set/drama',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date, name:name,city:city,datos:datos}
            })
        },
        accion : function(name, city, datos, date)
        {
            return $http({
                method:'post',
                url:'/cinema/set/accion',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date : date, name:name,city:city,datos:datos}
            })
        }
    }
});
app.factory('deleteData', function($http){
    return {
        delete : function(db,id)
        {
            return $http({
                method:'post',
                url:'/cinema/delete/'+db,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {id: id}
            })
        },
        get : function(db,date)
        {
            return $http({
                method:'post',
                url:'/cinema/get/'+db,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {date: date}
            })
        }
    }
});
