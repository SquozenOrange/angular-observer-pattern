angular.module('myInput').component('myInput', {
    
    templateUrl: '/app/my-input/my-input.template.html',
    
    controller: function MyInputController(eventNotify){
        
        var ctrl = {};

        ctrl.sendData = function(type, obj){
            eventNotify.notify(type, obj);
            ctrl.title = "";
            ctrl.message = "";
        };
        
        return ctrl;
        
    }
    
});