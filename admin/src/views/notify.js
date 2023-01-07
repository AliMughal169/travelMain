import React from 'react'
import NotificationAlert from "react-notification-alert";

function notify({option,setoption,notificationAlertRef}) {
    
    var options = {};
    options = {
      place: option.place,
      message: (
        <div>
          <div>
             <b>{option.message}</b>
            
          </div>
        </div>
      ),
      type:option.type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
    setoption('')
}

export default notify