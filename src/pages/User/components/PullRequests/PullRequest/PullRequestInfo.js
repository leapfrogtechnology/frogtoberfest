import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utils/date';

const PullRequestInfo = ({ pullRequest }) => (
  <div>
    <div className="text-gray-800">
      <a className="text-gray-800 font-semibold link no-underline hover:underline" href={pullRequest.user.html_url}>
        {pullRequest.user.login}
      </a>{' '}
      submitted a pull request{' '}
      <a
        className="text-gray-800 link no-underline hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={pullRequest.html_url}
      >
        {pullRequest.repository_url.split('repos/')[1]}#{pullRequest.number}
      </a>
    </div>
    <div className="text-gray-800">
      {pullRequest.title} on {formatDate(pullRequest.created_at)}
    </div>
  </div>
);

// TODO: Convert to camelCase and enable camelcase rule.
PullRequestInfo.propTypes = {
  pullRequest: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired, // eslint-disable-line camelcase
    repository_url: PropTypes.string.isRequired, // eslint-disable-line camelcase
    created_at: PropTypes.string.isRequired, // eslint-disable-line camelcase
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired // eslint-disable-line camelcase
    }).isRequired
  })
};

export default PullRequestInfo;
