import React from 'react';

import Navbar from '../Navbar/Navbar_container';

const greeting = () => {
  return(
    <div
      className="Greeting">

      <div>
        <Navbar />

        <div
          class="Greeting-Demo-Login">
          <p>For your NOTABLE notes! and more!</p>
          <button
            className="Demo-Login">
            Demo Log in
          </button>
        </div>

        <div>
          <p>hello</p>
        </div>
      </div>

      <div
        className="Greeting-Footer">
        <p>This is an Evernote clone for practice purposes and not for any commercial use!</p>

        <div
          className="Greeting-Footer-Icons">
          <img
            src={window.staticImages.github}>
          </img>
          <img
            src={window.staticImages.gmail}>
          </img>
          <img
            src={window.staticImages.linkedin}>
          </img>

        </div>
      </div>

    </div>
  );
};

export default greeting;
