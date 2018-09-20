angular.module("phoneList").service("operatorsAPI", function($http, config){
    this.getOperators = function(){
        return $http({
            method: 'GET',
            url: config.baseUrl + '/operators'
         });
    }
})