import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MergeStatus from './MergeStatus';
import PullRequestInfo from './PullRequestInfo';
import { isPullRequestMerged } from '../../../../../utils/utils';

const ISSUE_STATUS = {
  ALL: 'all',
  OPEN: 'open'
};

/**
 * Pull Request Component.
 */
class PullRequest extends Component {
  state = {
    isMerged: false
  };

  /**
   * Life cycle event for componentDidMount.
   */
  componentDidMount = async () => {
    if (this.props.pullRequest.state === ISSUE_STATUS.OPEN) return;

    const PRMerged = await isPullRequestMerged(this.extractPullRequestInfo());

    this.setState({
      isMerged: PRMerged
    });
  };

  /**
   * Extracts all needed information to call PR merged api.
   * 
   * @returns {Object}
   */
  extractPullRequestInfo = () => {
    const { pullRequest } = this.props;
    const splittedPRUrlArray = pullRequest.html_url.split('/');
    const pullNumber = pullRequest.number;
    const owner = splittedPRUrlArray[3];
    const repo = splittedPRUrlArray[4];

    return { pullNumber, owner, repo };
  }

  /**
   * Life cycle event for render.
   */
  render() {
    const { pullRequest } = this.props;

    return (
      <div className={`bg-white leading-normal p-4 flex border-b border-grey break-words`}>
        <MergeStatus open={pullRequest.state === ISSUE_STATUS.OPEN} merged={this.state.isMerged} />
        <PullRequestInfo pullRequest={pullRequest} />
      </div>
    );
  }
}

// TODO: Convert to camelCase and enable camelcase rule.
PullRequest.propTypes = {
  pullRequest: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired, // eslint-disable-line camelcase
    state: PropTypes.string.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired,
    html_url: PropTypes.string.isRequired // eslint-disable-line camelcase
  }).isRequired,
  split: PropTypes.func
};

export default PullRequest;
