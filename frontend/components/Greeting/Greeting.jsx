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

        <div>
          <image
            src={window.staticImages.github}>
          </image>
          <image>
          </image>
          <image>
          </image>
        </div>
      </div>

    </div>
  );
};

export default greeting;
