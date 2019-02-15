import React, { Component } from 'react';

class Main extends Component {

  state = {

  }

  render() {
    return (
      <div
        className="Main">

        <div
          className="Main-Sidebar">
          <div
            className="Main-Sidebar-User">
            Hi {this.props.currentUser.username}
          </div>
          <div
            className="Main-Sidebar-Searchbar">
            this is the search bar
          </div>
          <div
            className="Main-Sidebar-Menu">
            <button
              className="Main-Sidebar-New-Note">
              <img
                src= { window.staticImages.new }>
              </img>
              New Note
            </button>
            <button
              onClick={ () => this.props.logOut() }>
              Log out
            </button>
          </div>
        </div>

        <div
          className="Main-List">
          this is the list bar
        </div>

        <div
          className="Main-Editor">
          this is the editor
        </div>

      </div>
    )
  }
}

export default Main;
