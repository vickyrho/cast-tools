

var states = [
    {
        name:'login',
        state:{
            url:'/login',
            templateUrl:'../views/login.html',
            data:{
                text:"register",
                visible:"true"
            }
        }
    },
    {
        name:'register',
        state:{
            url:'/register',
            templateUrl:'../views/register.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    },
    {
        name:'home',
        state:{
            url:'/',
            templateUrl:'../views/home.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    },
    {
        name:'logo',
        state:{
            url:'/logo',
            templateUrl:'../views/logo.html',
            data:{
                text:"Logo",
                visible:"true"
            }
        }
    }

];

var app = angular.module('MyApp',['ui.router'])

    .config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');

    angular.forEach(states,function(state){
        console.log('state start');
        $stateProvider.state(state.name,state.state);
    });

    $locationProvider.html5Mode(true);
});