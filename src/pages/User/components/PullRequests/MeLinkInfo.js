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
      <div className="flex justify-center">
        <button
          className="border-gray-400 text-gray-400 rounded font-sm md:flex align-center text-sm items-center bg-transparent px-2 py-2"
          onClick={this.storeUsernameAsMe}
          style={buttonStyle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
          </svg>{' '}
          &nbsp; Save this page locally
        </button>
      </div>
    );
    let infoStr = (
      <p className="text-gray-400  mx-auto text-center text-xs my-4">
        You can find your PRs by visiting{' '}
        <a href={`${HOSTNAME}/me`} className="link text-orange underline-hover saveUser" id="melink">
          <u> {HOSTNAME}</u> &nbsp;
        </a>
        on this device after saving this page locally.
      </p>
    );
    const savedUsername = localStorage.getItem('myGithub');

    if (savedUsername === this.props.username) {
      storeUsernameBtn = null;
      infoStr = (
        <p className="text-gray-400 mx-auto text-center my-4 text-sm">
          Username {this.props.username} is saved locally. You can visit &nbsp;
          <a href={`${HOSTNAME}/me`} className="link saveUser underline" id="melink">
            {HOSTNAME}
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
