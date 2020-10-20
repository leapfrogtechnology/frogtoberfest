import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import PropTypes from 'prop-types';

import { TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT } from 'config';
import CompletionMessage from './CompletionMessage';
import UsernameInput from './UsernameInput';
import TimeMessage from './TimeMessage';
import CheckButton from './CheckButton';

/**
 * Username form component.
 */
class UsernameForm extends Component {
  static propTypes = {
    username: PropTypes.string,
    totalPrCount: PropTypes.number,
    totalOtherPrCount: PropTypes.number,
    // Provided by withRouter()
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    username: '',
    totalPrCount: 0,
    totalOtherPrCount: 0
  };

  state = {
    username: this.props.username
  };

  /**
   * Event handler for username change.
   *
   * @param {*} e
   */
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  /**
   * Event handler for form submission.
   *
   * @param {*} e
   */
  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username.trim();

    if (username.length === 0) {
      return;
    }
    const userUrl = this.getUserUrl(username);

    this.props.history.push(userUrl);
  };

  /**
   * Get URL for the user by username.
   *
   * TODO: Extract this out of the component as a util function.
   *
   * @param {string} username
   */
  getUserUrl = username => {
    return `/user/${username}`;
  };

  /**
   * Check the condition for eligibility.
   *
   * @param {*} totalPrCount
   * @param {*} totalOtherPrCount
   * @returns {boolean}
   */
  checkEligibility(totalPrCount, totalOtherPrCount) {
    if (totalPrCount < TOTAL_PR_COUNT) {
      return false;
    }

    return totalOtherPrCount >= TOTAL_OTHER_PR_COUNT;
  }

  render = () => {
    const isComplete = this.checkEligibility(this.props.totalPrCount, this.props.totalOtherPrCount);

    return (
      <div className="pb-8 pt-4 sm:pt-10">
        {isComplete ? <CompletionMessage /> : <TimeMessage />}
        <form
          className="flex mx-auto w-3/4 sm:w-1/2"
          style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
          onSubmit={this.handleSubmit}
        >
          <UsernameInput value={this.state.username} onChange={this.handleUsernameChange} />
          <CheckButton />
        </form>
      </div>
    );
  };
}

export default withRouter(UsernameForm);
