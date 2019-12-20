import React from "react";
import NotificationTypeRedux from '../../stores/notificationtype.redux';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';

export default class NotificationMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {

    NotificationTypeRedux.notificationTypeStore.subscribe(this.notificationReceiver.bind(this));

    let opacity = 0;
    this.interval = setInterval(() => {
      opacity += 0.1;
      if (opacity === 1) clearInterval(this.interval);

      this.setState({ opacity });
    }, 30);
  }


  notificationReceiver() {   
    var message="";
    switch (NotificationTypeRedux.notificationTypeStore.getState()) {
      case "CI":
          message="Connection issue";
        break;
      case "WI":
          message="User web cam connection issue";
        break;
      case "UI":
          message="User joined the table";
        break;
      case "UL":
          message="User left the table";
        break;
      case "UC":
          message="User connection issue";
        break;
      case "BS":
          message="Broadcast started";
        break;
      case "BE":
          message="Broadcast ended";
        break;
      case "UWI":
          message="User web cam issue";
        break;
      default:
        break;
    }

    store.addNotification({     
      message: message,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 100,
        onScreen: true
      }
    });
  }

  render() {
    return (
      <div>
          <ReactNotification />
      </div>    
    );
  }
}
