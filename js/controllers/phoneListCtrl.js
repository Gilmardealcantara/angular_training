angular.module("phoneList").controller("phoneListCtrl",  function($scope, contactsAPI, operatorsAPI, serialGenerator){
    $scope.app = "Phone List";
    $scope.operators = [];
    $scope.contacts = [];
    var loadContacts = function(){
        contactsAPI.getContacts().then(function (response){
            $scope.contacts = response.data     
         },function (error){
            $scope.message = "Error Contacts: " +  error;      
         });
    }
    var loadOperators = function(){
        operatorsAPI.getOperators().then(function (response){
            $scope.operators = response.data     
         },function (error){
            $scope.message = "Error Operators: " +  error;      
         });
    }

    $scope.addContact = function(contact){
        contact.serial = serialGenerator.generate();
        contact.date = new Date();
        contact.color = 'orange';
        contactsAPI.saveContact(contact).then(function (response){
            loadContacts();
            delete $scope.contact;
            $scope.formContact.$setPristine(); 
        },function (error){
      
         });
        
    }
    $scope.deleteContact = function(contacts){
        $scope.contacts = contacts.filter(function (contact){ return !contact.selected})
    }
    
    $scope.isSelectedContacts = function(contacts){
        return contacts.some(function (c){ return c.selected}) 
    }

    $scope.orderTableBy = function(field){
        console.log(field)
        $scope.orderCriterion = field;
        $scope.orderDirection = ! $scope.orderDirection;
    }

    loadContacts();
    loadOperators();
}); 