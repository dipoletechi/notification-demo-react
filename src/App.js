import React from 'react';
import './App.css';
import Notifications from './Components/Notifications/Notifications';
import NotificationMessage from "./Components/NotificationMessage/NotificationMessage.js";

export default class App extends React.Component {

constructor(props){
  super(props);

  this.state = {
    checked: false,
  }
}
render(){
  return (
    <div className="App">  
        <Notifications/>
        <NotificationMessage/>
    </div>
  );
}
}
