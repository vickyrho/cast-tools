/**
 * Created by zeus on 9/30/17.
 */

angular.module('MyApp')
    .factory("RegisterService",RegisterService);

RegisterService.$inject= ['$http'];

    function RegisterService($http){

        var service = {};
            service.register = register;
        return service ;

        function register(params){
            return $http.post("http://localhost:8000/api/users",params).then(function(data){
                return data;
            },function(data){
                return data;
            });
        }
    }