angular.module('toastNotifications').component('toastNotifications', {
    
    templateUrl: '/app/toast-notifications/toast-notifications.template.html',
    
    controller: function ToastNotificationsController(eventNotify, $timeout){
        
        var ctrl = {};
        
        ctrl.data = [];
        
        ctrl.update = function(type, obj){
            switch(type){
                case "add":
                    ctrl.data.push({title: "A new post was made with the title: " + obj.title, type: "success"});
                    break;
                case "remove":
                    ctrl.data.push({title: "The post with the title: '" + obj.title + "' was removed", type: "danger"})
                    break;
                default:
                    break;
            }
            
            $timeout(ctrl.removeToast, 4000);
        };
        
        ctrl.removeToast = function(){
            if(ctrl.data.length > 0){ 
                ctrl.data.shift();
            }
        };
        
        eventNotify.attach(ctrl);
        
        return ctrl;
        
    }
    
});