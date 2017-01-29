angular.module('myOutput').component('myOutput', {

    templateUrl: '/app/my-output/my-output.template.html',
    
    controller: function MyOutputController(eventNotify){
        
        var ctrl = {};
        
        ctrl.data = [{title: "Example Item", message: "This item has been added as an exmaple"}];
        
        ctrl.update = function(titleArg, messageArg){
            ctrl.data.push({title: titleArg, message: messageArg});
        };
        
        ctrl.remove = function(index){
            return confirm("Remove item?") ? ctrl.data.splice(index, 1) : false;
        }
        
        eventNotify.attach(ctrl);
        
        return ctrl;
        
    }
    
});