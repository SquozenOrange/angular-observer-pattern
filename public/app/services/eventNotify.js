angular.module('app').factory('eventNotify', function(){
    
    var service = {
        
        listeners: [],
        
        attach: function(obj){
            service.listeners.push(obj);
        },
        
        notify: function(arg1, arg2){
            for(var i in service.listeners){
                service.listeners[i].update(arg1, arg2);
            }
        }
        
    };
    
    return service;
    
});