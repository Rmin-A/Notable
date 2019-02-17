import React from 'react';

import { AuthRoute, ProtectedRoute } from '../../utils/route_util';

import Navbar from '../Navbar/Navbar';
import SignIn from '../Auth/SignIn_Container';
import SignUp from '../Auth/SignUp_Container';

const greeting = () => {

  return(
    <div
      className="Greeting">
      <div>
        <Navbar />
      </div>
      <div
        className="Greeting-Demo-Login">
        <img
          src={ window.staticImages.dl }>
        </img>
        <p>For your NOTABLE notes! and more!</p>
        <button
          className="Demo-Login">
          Demo Log in
        </button>
      </div>
      <div
        className="Greeting-Mid-Panel">
        <div
          className="Greeting-Mid-Panel-1Box">
          <img
            src={ window.staticImages.mid1 }>
          </img>
          <p>Focus on what matters most!</p>
        </div>
        <div
          className="Greeting-Mid-Panel-2Box">
          <img
            src={ window.staticImages.mid2 }>
          </img>
          <p>Remember everything important!</p>
        </div>
        <div
          className="Greeting-Mid-Panel-3Box">
          <img
            src={ window.staticImages.mid3 }>
          </img>
          <p>Stay strong, with or without this app!</p>
        </div>
      </div>
      <div
        className="Greeting-Footer">
        <div>
          <p>This is an Evernote clone for practice purposes and not for any commercial use!</p>
        </div>
        <div
          className="Greeting-Footer-Icons">
          <img
            src={ window.staticImages.github }>
          </img>
          <img
            src={ window.staticImages.gmail }>
          </img>
          <img
            src={ window.staticImages.linkedin }>
          </img>
        </div>
      </div>
    </div>
  );
};

export default greeting;
