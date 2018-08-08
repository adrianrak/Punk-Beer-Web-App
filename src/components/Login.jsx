import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './login.css';

export default class FaceLogin extends React.Component {

  render() {
    return (
        <div className="container">
          <a className="link-flex" href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=389752861761.411618303955"><img className="img-size" alt="Sign in with Slack"  src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
        </div>
    )
  }
}
