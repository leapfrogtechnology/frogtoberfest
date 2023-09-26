import React from 'react';
import PropTypes from 'prop-types';

const PullRequestCount = ({ pullRequestCount, pullRequestAmount }) => (
  <span className="block rounded white  font-figtree fs-32 text-primary">
    {pullRequestCount} / {pullRequestAmount}
  </span>
);

PullRequestCount.propTypes = {
  pullRequestCount: PropTypes.number.isRequired,
  pullRequestAmount: PropTypes.number.isRequired
};

export default PullRequestCount;
