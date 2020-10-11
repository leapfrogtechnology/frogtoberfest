import React from 'react';
import PropTypes from 'prop-types';
import getMessage from './getMessage';

const MotivationalMessage = ({ pullRequestCount, otherReposCount }) => {
  let message;

  try {
    message = getMessage(pullRequestCount, otherReposCount);
  } catch (err) {
    message = 'An error occured.';
  }

  return <p className="font-medium text-green-800 text-xl m-3">{message}</p>;
};

MotivationalMessage.propTypes = {
  pullRequestCount: PropTypes.number,
  otherReposCount: PropTypes.number
};

export default MotivationalMessage;
