angular.module('MyApp').controller('RegisterController',RegisterController);

RegisterController.$inject=['$scope','$http','$state','RegisterService'];

function RegisterController ($scope,$http,$state,RegisterService){

    var Regctrl = this ;

    Regctrl.regDetails = {};

    Regctrl.display = function(regDetails){

        var newData = {
            name : Regctrl.regDetails.name ,
            username : Regctrl.regDetails.username,
            password : Regctrl.regDetails.password,
            email: Regctrl.regDetails.email,
            age: Regctrl.regDetails.age,
            sex: Regctrl.regDetails.sex

        };

        console.log(regDetails);
        console.log(newData);
        console.log('hello from reg controller');

   //     $http.post('http://localhost:8000/api/users', newData).

            RegisterService.register(newData).then(function(data){
            console.log(data);
        });

        console.log("data base updated");

        $state.go('login',{
            url:'/login',
                templateUrl:'../views/login.html',
                data:{
                text:"Login",
                    visible:"true"
            }
        })
    }
}


