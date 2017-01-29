angular.module('myInput').component('myInput', {
    
    templateUrl: '/app/my-input/my-input.template.html',
    
    controller: function MyInputController(eventNotify){
        
        var ctrl = {};

        ctrl.sendData = function(title, message){
            eventNotify.notify(title, message);
            ctrl.title = "";
            ctrl.message = "";
        };
        
        return ctrl;
        
    }
    
});