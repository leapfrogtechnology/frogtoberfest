import React from 'react';
import PropTypes from 'prop-types';
import MergeStatus from './MergeStatus';
import PullRequestInfo from './PullRequestInfo';

const ISSUE_STATUS = {
  ALL: 'all',
  OPEN: 'open',
  MERGED: 'merged'
};

const PullRequest = ({ pullRequest, merged }) => (
  <div className={`bg-white leading-normal p-4 flex border-b border-grey break-words`}>
    <MergeStatus open={pullRequest.state === ISSUE_STATUS.OPEN} merged={merged} />
    <PullRequestInfo pullRequest={pullRequest} />
  </div>
);

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
  }).isRequired,
  merged: PropTypes.bool.isRequired
};

export default PullRequest;
