import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MergeStatus from './MergeStatus';
import PullRequestInfo from './PullRequestInfo';
import { GITHUB_TOKEN } from '../../../../../config';
import { fetchInfoFromGitHub } from '../../../../../utils/utils';

const ISSUE_STATUS = {
  ALL: 'all',
  OPEN: 'open',
  CLOSED: 'closed'
};
/**
 * Pull Request Component.
 */
class PullRequest extends Component {
  state = {
    isMerged: false,
  };

  /**
   * Life cycle event for componentDidMount.
   */
  componentDidMount = async () => {
    const { pullRequest } = this.props;
    const pullNumber = pullRequest.number;
    const splittedPRUrlArray = pullRequest.html_url.split('/');
    const owner = splittedPRUrlArray[3];
    const repo = splittedPRUrlArray[4];
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/merge`;
    try {
      const merged = await fetchInfoFromGitHub(apiUrl, GITHUB_TOKEN);
      this.setState({
        isMerged: merged.ok,
      });
    } catch (e) {
      console.log(e)
      this.setState({
        isMerged: false,
      });
    }
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
    }).isRequired
  }).isRequired
};

export default PullRequest;
