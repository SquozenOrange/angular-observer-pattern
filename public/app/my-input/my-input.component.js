angular.module('myInput').component('myInput', {
    
    templateUrl: '/app/my-input/my-input.template.html',
    
    controller: function MyInputController(){
        
        var ctrl = {};
        
        ctrl.test = "Hello";
        
        return ctrl;
        
    }
    
});