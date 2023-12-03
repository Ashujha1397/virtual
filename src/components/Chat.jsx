import React, { Component } from 'react';
import './Chat.css';
import sit from './cut/uu.gif';

class Chat extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '2d7c579417b1e36ee7d5725b41aaced74',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');

      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return (
      <>
      
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div className='img'>
          <img src={sit} alt='uni'/>
        </div>
      </>
    );
  }
}

export default Chat;
