angular.module("phoneList").factory("contactsAPI", function($http, config){
    var _getContacts = function(){
        return $http({
            method: 'GET',
            url: config.baseUrl + '/contacts'
         })
    };
    var _saveContact = function(contact){
        return $http({
            method: 'POST',
            url: config.baseUrl + '/contact',
            data: contact
         })
    }
    return {
        getContacts: _getContacts,
        saveContact: _saveContact
    }
});