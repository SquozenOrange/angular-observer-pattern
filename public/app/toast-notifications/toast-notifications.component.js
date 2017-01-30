angular.module('toastNotifications').component('toastNotifications', {
    
    templateUrl: '/app/toast-notifications/toast-notifications.template.html',
    
    controller: function ToastNotificationsController(eventNotify, $interval){
        
        var ctrl = {};
        
        ctrl.data = [];
        
        ctrl.update = function(titleArg){
            ctrl.data.push({title: "A new post was made with the title: " + titleArg});
        };
        
        ctrl.removeToast = $interval(function(){
            if(ctrl.data.length > 0){ 
                ctrl.data.shift();
            }
        }, 5000);
        
        eventNotify.attach(ctrl);
        
        return ctrl;
        
    }
    
});