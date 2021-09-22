import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOSTNAME } from 'config';

/**
 * "Me" link info component.
 */
class MeLinkInfo extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  };

  storeUsernameAsMe = () => {
    localStorage.setItem('myGithub', this.props.username);
    this.forceUpdate();
  };

  render = () => {
    let storeUsernameBtn = (
      <button
        className="bg-blue-light text-blue-darker mx-auto mt-2 h-8 border-none pointer rounded-sm px-4 block saveUser"
        onClick={this.storeUsernameAsMe}
        style={buttonStyle}
      >
        This is Me
      </button>
    );
    let infoStr = (
      <p className="text-gray-800 mx-auto text-center my-4">
        In the future, you can find your PRs by visiting{' '}
        <a href={`${HOSTNAME}/me`} className="link text-orange underline-hover saveUser" id="melink">
          {HOSTNAME}
          /me
        </a>{' '}
        on this device.
      </p>
    );
    const savedUsername = localStorage.getItem('myGithub');

    if (savedUsername === this.props.username) {
      storeUsernameBtn = null;
      infoStr = (
        <p className="text-gray-400 mx-auto text-center my-4 text-sm">
          Username {this.props.username} is saved locally! You can visit &nbsp;
          <a href={`${HOSTNAME}/me`} className="link saveUser underline" id="melink">
            {HOSTNAME}
            /me
          </a>
        </p>
      );
    }

    return (
      <div className="rounded mx-auto mt-8 overflow-hidden w-5/6 lg:w-1/2">
        {storeUsernameBtn}
        {infoStr}
      </div>
    );
  };
}

const buttonStyle = {
  border: '2px solid #12336f'
};

export default MeLinkInfo;
