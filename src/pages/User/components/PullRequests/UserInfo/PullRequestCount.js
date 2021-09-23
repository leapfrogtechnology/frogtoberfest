import React from 'react';
import PropTypes from 'prop-types';

const PullRequestCount = ({ pullRequestCount, pullRequestAmount }) => (
  <span className="block rounded text-5xl font-medium text-green-400 w-64">
    {pullRequestCount} / {pullRequestAmount}
  </span>
);

PullRequestCount.propTypes = {
  pullRequestCount: PropTypes.number.isRequired,
  pullRequestAmount: PropTypes.number.isRequired
};

export default PullRequestCount;
