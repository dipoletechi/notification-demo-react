import React from "react";
import "./Notifications.scss";
import NotificationTypeRedux from '../../stores/notificationtype.redux';

export default class Notifications extends React.Component {
  constructor() {
    super();

    this._notificationTypeRedux=new NotificationTypeRedux();  
    this.state = {
      showNotification: true,
      notificationType:""
    };
  }


  toggleNotificationPanel() {

    if (!this.state.showNotification) {
      document.getElementById("notificationbtncontainer").style.display = "none";
    } else {
      document.getElementById("notificationbtncontainer").style.display = "block";
    }

    this.setState({
      showNotification: !this.state.showNotification
    });
  }

  sendNotification(notificationType) {   
    this.setState({
      notificationType: notificationType
    },function(){        
        this._notificationTypeRedux.selectedNotificationTypeDispatcher(this.state.notificationType);
    });
  }


  render() {
    return (
      <React.Fragment>
        <div className="buttons">
          <img className="notificationbtn" onClick={() => this.toggleNotificationPanel()} alt="notificationbell"
            src={require('../../img/notification.png')} />

          <div className="notificationbtns" id="notificationbtncontainer">
            <ul>
              <li><button onClick={() => this.sendNotification("CI")}>Connection Issue</button></li>
              <li><button onClick={() => this.sendNotification("WI")}>Webcam Issue</button></li>
              <li><button onClick={() => this.sendNotification("UI")}>User Joined</button></li>
              <li><button onClick={() => this.sendNotification("UL")}>User Left</button></li>
              <li><button onClick={() => this.sendNotification("UC")}>User Connection</button></li>
              <li><button onClick={() => this.sendNotification("BS")}>Broadcast Start</button></li>
              <li><button onClick={() => this.sendNotification("BE")}>Broadcast End</button></li>
              <li><button onClick={() => this.sendNotification("UWI")}>User Webcam Issue</button></li>
            </ul>

          </div>
        </div>

      </React.Fragment>
    );
  }
}
