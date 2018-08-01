import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

export default class FaceLogin extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} 
        />
    )
  }
}
