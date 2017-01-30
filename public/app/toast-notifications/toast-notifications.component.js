angular.module('toastNotifications').component('toastNotifications', {
    
    templateUrl: '/app/toast-notifications/toast-notifications.template.html',
    
    controller: function ToastNotificationsController(eventNotify, $timeout){
        
        var ctrl = {};
        
        ctrl.data = [];
        
        ctrl.update = function(titleArg){
            ctrl.data.push({title: "A new post was made with the title: " + titleArg});
            $timeout(ctrl.removeToast, 2000);
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