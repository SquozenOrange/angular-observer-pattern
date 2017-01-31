angular.module('myOutput').component('myOutput', {

    templateUrl: '/app/my-output/my-output.template.html',
    
    controller: function MyOutputController(eventNotify){
        
        var ctrl = {};
        
        ctrl.data = [{title: "Example Item", message: "This item has been added as an exmaple"}];
        
        ctrl.update = function(type, obj){
            switch(type){
                case "add":
                    ctrl.data.push({title: obj.title, message: obj.message});
                    break;
                default:
                    break;
            }
        };
        
        ctrl.removeItem = function(index, obj){
            if( confirm("Remove this item?") == true ){
                eventNotify.notify("remove", obj);
                ctrl.data.splice(index, 1);
            }
        }
        
        eventNotify.attach(ctrl);
        
        return ctrl;
        
    }
    
});