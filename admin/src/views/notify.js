import React from 'react'

function notify({option,setoption,notificationAlertRef}) {
    console.log(option)
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